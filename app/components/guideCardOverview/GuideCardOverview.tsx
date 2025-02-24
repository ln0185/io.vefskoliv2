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
  grades,
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
  grades?: number[];
}) => {
  const capitalizeFirstLetter = (text: string) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const getTagStatus = () => {
    if (returnStatus === ReturnStatus.NOT_RETURNED) return "Due";
    if (feedbackStatus === FeedbackStatus.NEED_TO_PROVIDE_FEEDBACK)
      return "Review";
    if (returnStatus === ReturnStatus.PASSED) return "Pass ✔";
    if (gradesGivenStatus === GradesGivenStatus.NEED_TO_GRADE) return "Grade";

    if (grades && grades.length === 2) {
      const sumOfGrades = grades[0] + grades[1];
      if (sumOfGrades >= 10) return `Pass: ${sumOfGrades}`;
      else return `Fail: ${sumOfGrades}`;
    }
    if (returnStatus === ReturnStatus.FAILED) return "Fail";
    if (returnStatus === ReturnStatus.AWAITING_FEEDBACK) return "Waiting";
    if (feedbackStatus === FeedbackStatus.AWAITING_PROJECTS) return "Waiting";
    if (feedbackStatus === FeedbackStatus.FEEDBACK_GIVEN) return "Waiting";
    if (gradesGivenStatus === GradesGivenStatus.AWAITING_FEEDBACK)
      return "Waiting";

    return "default";
  };

  const getTagText = () => {
    return getTagStatus();
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
