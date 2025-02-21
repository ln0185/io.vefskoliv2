import { DesignIcon, CodeIcon, Tag } from "./style";
import {
  FeedbackStatus,
  GradesGivenStatus,
  ReturnStatus,
} from "types/guideTypes";
import {
  Info,
  GuideDescription,
  GuideNr,
  Name,
  GuideCardContainer,
  StyledLink,
} from "./style";

export const GuideCardOverview = ({
  guideTitle,
  moduleTitle,
  order,
  link,
  category,
  returnStatus,
  feedbackStatus,
  grade,
  gradesGivenStatus,
}: {
  guideTitle: string;
  moduleTitle: string;
  order?: number;
  link?: string;
  category: string;
  returnStatus: ReturnStatus;
  feedbackStatus: FeedbackStatus;
  gradesGivenStatus: GradesGivenStatus;
  grade?: number;
}) => {
  const capitalizeFirstLetter = (text: string) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const getTagStatus = () => {
    if (returnStatus === ReturnStatus.NOT_RETURNED) return "Due";
    if (returnStatus === ReturnStatus.AWAITING_FEEDBACK) return "Waiting";
    if (returnStatus === ReturnStatus.PASSED) return "Pass ✔";
    if (returnStatus === ReturnStatus.FAILED) return "Fail";
    if (feedbackStatus === FeedbackStatus.AWAITING_PROJECTS) return "Waiting";
    if (feedbackStatus === FeedbackStatus.NEED_TO_PROVIDE_FEEDBACK)
      return "Review";
    if (feedbackStatus === FeedbackStatus.FEEDBACK_GIVEN) return "Waiting";
    if (gradesGivenStatus === GradesGivenStatus.AWAITING_FEEDBACK)
      return "Waiting";
    if (gradesGivenStatus === GradesGivenStatus.NEED_TO_GRADE) return "Grade";
    return "default";
  };

  const getTagText = () => {
    switch (getTagStatus()) {
      case "Due":
        return "Due";
      case "Waiting":
        return "Waiting";
      case "Pass ✔":
        return "Pass ✔";
      case "Fail":
        return "Fail";
      case "Grade":
        return "Grade";
      default:
        return "Due";
    }
  };

  const Content = () => {
    return (
      <Info>
        {category === "code" ? <CodeIcon /> : <DesignIcon />}
        <Tag status={getTagStatus()}>
          <span>{getTagText()}</span>
        </Tag>
        <GuideDescription>
          <GuideNr>
            {order
              ? `Guide ${order}`
              : `Module ${capitalizeFirstLetter(moduleTitle)}`}
          </GuideNr>
          <Name>{capitalizeFirstLetter(guideTitle)}</Name>
        </GuideDescription>
      </Info>
    );
  };

  return link ? (
    <StyledLink href={link} passHref>
      <Content />
    </StyledLink>
  ) : (
    <GuideCardContainer>
      <Content />
    </GuideCardContainer>
  );
};
