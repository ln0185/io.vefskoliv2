import { Types } from "mongoose";
import { ModuleType } from "../app/models/guide";
import { FeedbackDocument, GradedFeedbackDocument } from "../app/models/review";
import { ReturnDocument } from "../app/models/return";

export type FeedbackDocumentWithReturn = FeedbackDocument & {
  associatedReturn?: ReturnDocument;
};

export type GuideInfo = {
  _id: Types.ObjectId;
  title: string;
  description: string;
  category: string;
  order: number;
  module: ModuleType;

  // this user's project returns
  returnsSubmitted: ReturnDocument[];
  feedbackReceived: FeedbackDocument[];

  // giving feedback on others' returns
  availableForFeedback: ReturnDocument[];
  feedbackGiven: FeedbackDocumentWithReturn[];

  // grades received by others on feedback given by this user
  gradesReceived: GradedFeedbackDocument[];

  // grading others' feedback
  gradesGiven: GradedFeedbackDocument[];
  availableToGrade: FeedbackDocument[];
};

export type GuideWithLink = GuideInfo & { link: string };

export type Module = {
  title: string;
  number: number;
};

export type ExtendedGuideInfo = GuideWithLink & {
  link: string;
  returnStatus: ReturnStatus;
  feedbackStatus: FeedbackStatus;
  gradesReceivedStatus: GradesReceivedStatus;
  grade: number | undefined;
  gradesGivenStatus: GradesGivenStatus;
};

export enum ReturnStatus {
  NOT_RETURNED = "Due",
  AWAITING_FEEDBACK = "Waiting",
  PASSED = "Pass ✔",
  HALL_OF_FAME = "Hall of Fame",
  FAILED = "Fail",
}

export enum FeedbackStatus {
  AWAITING_PROJECTS = "Waiting",
  NEED_TO_PROVIDE_FEEDBACK = "Review",
  FEEDBACK_GIVEN = "Waiting",
}

export enum GradesGivenStatus {
  AWAITING_FEEDBACK = "Waiting",
  NEED_TO_GRADE = "Grade",
  GRADES_GIVEN = "Grades given",
}

export enum GradesReceivedStatus {
  AWAITING_GRADES = "Waiting",
  GRADES_RECEIVED = "Grades received",
}
