import type { SurveyQuestionResponseModel } from "../../../../db/lib/models/lib/SurveyQuestionResponseModel.js";
import type { Repos } from "../../Repos.js";
export type SurveyQuestionResponseRepo = ReturnType<
  typeof SurveyQuestionResponseRepo
>;
export declare const SurveyQuestionResponseRepo: (repos: Repos) => {
  findAll: () => Promise<
    import("@battle-aces-fan/datacontracts").SurveyQuestionResponse[]
  >;
  findByQuestionKind: (
    params: Parameters<SurveyQuestionResponseModel["findByQuestionKind"]>[0],
  ) => Promise<
    import("@battle-aces-fan/datacontracts").SurveyQuestionResponse[]
  >;
  findByUser: (
    params: Parameters<SurveyQuestionResponseModel["findAllByUser"]>[0],
  ) => Promise<
    import("@battle-aces-fan/datacontracts").SurveyQuestionResponse[]
  >;
  create: (
    params: Parameters<SurveyQuestionResponseModel["create"]>[0],
  ) => Promise<import("@battle-aces-fan/datacontracts").SurveyQuestionResponse>;
};
//# sourceMappingURL=SurveyQuestionResponseRepo.d.ts.map
