import { connectToDatabase } from "../../utils/mongoose-connector";
import { Guide as G, GuideType } from "../../models/guide";
import { Types } from "mongoose";
import { useState } from "react";
import Modal from "../../components/modal/modal";

import {
  Title,
  SubTitle,
  Wrapper,
  Border,
  Container,
  Main,
  Side,
  Content,
  BlackSubTitle,
  Requirements,
  KnowledgeAndSkills,
  ReturnWrapper
} from "./style";
import Button from "../../globalStyles/buttons/default"

import MarkdownReader from "../../components/markdown/reader";
import { StyledLink } from "../../components/guideCard/style";
import ReturnForm from "./returnForm";

//Getting the guide and all of it's data/content here
const getGuide = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    return null;
  }
  const objectId = new Types.ObjectId(id);
  await connectToDatabase();
  const guide: (GuideType & { _id: string }) | null = await G.findOne({
    _id: objectId,
  });
  return guide;
};

//displaying the guide here
const guide = async ({ params }: { params: { id: string } }) => {

  const g = await getGuide(params.id);
  if (!g) {
    return (
      <>
        <h1>Guide not found</h1>
        <h2>{params.id}</h2>
      </>
    );
  }
  const rMaterials = g.resources.map((material) => {
    return { title: material.description, link: material.link };
  });
  const cMaterials = JSON.parse(JSON.stringify(g.classes));
  const allMaterials = rMaterials.concat(cMaterials);

  return (
    <Container>
      <Title>{g.title}</Title>
      <Content>
        <Main>
          <Wrapper>
            <SubTitle>DESCRIPTION</SubTitle>
            <MarkdownReader>{g.description}</MarkdownReader>
          </Wrapper>

          <Wrapper>
            <SubTitle>EXAMPLE</SubTitle>
            <MarkdownReader>{g.themeIdea.description}</MarkdownReader>
          </Wrapper>
        </Main>
        <Side>
          <Wrapper>
            <BlackSubTitle>MATERIALS</BlackSubTitle>
            <Border>
              {allMaterials.map((material, index) => (
                /* Checking if the link has title if not it won't be displayed ---- FIX IT THE DATA BASE*/
                  material.title ? (
                  <a
                    key={index}
                    style={{textAlign:"left", textDecoration:"none"}}
                    href={material.link}
                    target="_blank"
                  >
                    <Button style="default">{material.title}</Button>
                  </a>
                  ) : null
              ))}
            </Border>
          </Wrapper>

          <Wrapper>
            <BlackSubTitle>TOPICS</BlackSubTitle>
            <Border>
              <MarkdownReader>{g.topicsList}</MarkdownReader>
            </Border>
          </Wrapper>

          <Wrapper>
            <BlackSubTitle>TIPS</BlackSubTitle>
            <Border>
              If you get stuck you can always contact us on Slack and we will
              reply to you as soon as we can. You can also ask us to do a
              “huddle” (a video call on Slack) with you and then we will find a
              time to do that.
            </Border>
          </Wrapper>
        </Side>
      </Content>

      <Wrapper>
        <BlackSubTitle>REQUIREMENTS</BlackSubTitle>
        <Border style={{minHeight:"238px"}}>
            <Requirements>
          <KnowledgeAndSkills>
            <SubTitle>KNOWLEDGE</SubTitle>
              {g.knowledge.map((knowledge) => {
                return (
                  <MarkdownReader>
                  {String(knowledge.knowledge)}
                  </MarkdownReader>
                  
                )
              })}
          </KnowledgeAndSkills>
          <KnowledgeAndSkills>
          <SubTitle>SKILLS</SubTitle>
          {g.skills.map((skills) => {
                return (
                  <MarkdownReader>
                  {String(skills.skill)}
                  </MarkdownReader>
                  
                )
              })}
          </KnowledgeAndSkills>
          </Requirements>
        </Border>
      </Wrapper>
      <ReturnWrapper>
      <ReturnForm />
      </ReturnWrapper>
      {}
    </Container>
  );
};

export default guide;
