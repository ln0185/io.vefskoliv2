import { SmallText } from "globalStyles/text";
import {
  FeedbackStatus,
  GradesGivenStatus,
  ReturnStatus,
} from "types/guideTypes";
import { Grade, Status, StatusesWrapper } from "./style";

export const GuideCardStatuses = ({
  returnStatus,
  feedbackStatus,
  gradesGivenStatus,
  grade,
}: {
  returnStatus: ReturnStatus;
  feedbackStatus: FeedbackStatus;
  gradesGivenStatus: GradesGivenStatus;
  grade?: number;
}) => {
  if (returnStatus === ReturnStatus.NOT_RETURNED) return null;

  return (
    <StatusesWrapper>
      <Status>
        <FeedbackAndGradeStatus
          returnStatus={returnStatus}
          grade={grade}
          feedbackStatus={feedbackStatus}
          gradesGivenStatus={gradesGivenStatus}
        />
      </Status>
    </StatusesWrapper>
  );
};

const FeedbackAndGradeStatus = ({
  gradesGivenStatus,
  feedbackStatus,
  grade,
}: {
  returnStatus: ReturnStatus;
  gradesGivenStatus: GradesGivenStatus;
  feedbackStatus: FeedbackStatus;
  grade: number | undefined;
}) => {
  if (feedbackStatus === FeedbackStatus.NEED_TO_PROVIDE_FEEDBACK) {
    return (
      <>
        <SmallText>{FeedbackStatus.NEED_TO_PROVIDE_FEEDBACK}</SmallText>
      </>
    );
  }

  if (gradesGivenStatus === GradesGivenStatus.NEED_TO_GRADE) {
    return (
      <>
        <SmallText>{GradesGivenStatus.NEED_TO_GRADE}</SmallText>
      </>
    );
  }

  if (grade) {
    return (
      <>
        <SmallText>GRADE</SmallText>
        <Grade>{grade}</Grade>
      </>
    );
  }
  return null;
};
