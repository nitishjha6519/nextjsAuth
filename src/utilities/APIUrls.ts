//fetch anchor data
const API_LIST_FOR_ANCHOR = (
  anchorSort: string = "",
  page: number = 1,
  limit: number = 10,
  AnchorNameSelected: string = "",
  search: string = ""
) => {
  return `/api/program/anchors?anchorSort=${anchorSort}&page=${page}&limit=${limit}&anchor=${AnchorNameSelected}&search=${search}`;
};

const API_ALL_PROGRAM = "/api/program/anchorNonAnchorByProgramId/all";

const API_CHECK_NON_ANCHOR = "/api/program/check/non-anchor/exist";

const API_INVOICE = "/api/invoices";
const API_Eligible_PROGRAMM = (programId: any) => {
  return `api/scfusers/upload/eligibility?programId=${programId}`;
};
const API_POST_BULK_INVOICE = "/api/invoices/bulk-upload";
const API_USER_PROGRAM = (userId: string) => {
  return `/api/scfusers/${userId}/program/details`;
};

const API_INVOICE_BULK_STATUS_CHANGE = "api/invoices/bulkApproveRejectInvoice";

const API_LIST_ANCHOR = "/api/program/anchors";
// fetch entity data
const API_LIST_ENTITIES = "/api/program/organisations";

//fetch program data
const API_LIST_PROGRAM = (
  search: string = "",
  anchorId: string = "",
  organisationId: string = "",
  entityProgramRole: string = "",
  anchorSort: string = "",
  page: number = 1,
  limit: number = 10
) => {
  // if (sessionStorage.pageNumber) page = sessionStorage.pageNumber
  // return `/api/program?isConfigured=false&search=${search}&anchor=${anchorId}&entity=${organisationId}&entityProgramRole=${entityProgramRole}&anchorSort=${anchorSort}&page=${page}&limit=${limit}`;
  return `/api/program?search=${search}&anchor=${anchorId}&entity=${organisationId}&entityProgramRole=${entityProgramRole}&anchorSort=${anchorSort}&page=${page}&limit=${limit}`;
};

const API_PROGRAMS = (
  finance: string = "",
  anchor: string = "",
  search: string = "",
  anchorSort: string = "",
  page: number = 1,
  limit: number = 10
) => {
  // if (sessionStorage.pageNumber) page = sessionStorage.pageNumber
  return `/api/anchor?isConfigured=true&finance=${finance}&anchor=${anchor}&search=${search}&anchorSort=${anchorSort}&page=${page}&limit=${limit}`;
};

// scf main
const API_PROGRAM_DETAIL = "/api/program/detail";
const API_PROGRAM_CONFIGURE = "/api/program/details/configure";
const API_GET_FINANCIERS_SCF = (
  pageNumber: number = 1,
  limit: number = 10,
  search: string = ""
) => {
  return `/api/financiers/main?search=${search}&page=${pageNumber}&limit=${limit}`;
};

// scf finances
const API_LIST_FINANCIER_DETAILS = (
  financierId: string = "",
  invoiceStatus: string = "",
  pageNumber: number = 1,
  limit: number = 10,
  search: string = "",
  invoicesSort: string = "",
  entity: string = "",
  role: string = ""
) => {
  return `/api/financiers/id?financierId=${financierId}&invoiceStatus=${invoiceStatus}&page=${pageNumber}&limit=${limit}&search=${search}&invoicesSort=${invoicesSort}&entity=${entity}&role=${role}`;
};

// program invoices
const API_GENERATEDPROGRAMID_INVOICES = (
  generatedProgramId: string = "",
  pageNumber: number = 1,
  limit: number = 10,
  invoiceSort: string = "",
  sortOnType: string = "",
  entity: string = "",
  programName: string = "",
  invoiceStatus: string = "",
  disbursalFromDate: string = "",
  disbursalToDate: string = "",
  invoicesSort: any
  // invoicesStatus: string = "UPLOADED"
  // &disbursalFromDate=${disbursalFromDate}&disbursalToDate=${disbursalToDate}
) => {
  return `/api/program/programid/invoices?generatedProgramId=${generatedProgramId}&page=${pageNumber}&limit=${limit}&programName=${programName}&entity=${entity}&invoiceStatus=${invoiceStatus}&sortOnType=${invoicesSort?.sortOnType}&invoiceSort=${invoicesSort?.invoiceSort}&disbursalFromDate=${disbursalFromDate}&disbursalToDate=${disbursalToDate}`;
};

const PATCH_INVOICE_STATUS = `/api/invoices`;

const API_GET_FINANCIERS = "/api/financiers";
export const ADD_CHARGES_MODEL = "/api/program/addCharges";
// const API_PROGRAM_DETAIL = (programId: any) => {
//   return `/api/program/detail/${programId}`;
// };

// const API_PROGRAM_DETAIL = (programId: any) => {
//   return `/api/program/detail/${programId}`;
// };

//List Cases
// const API_LIST_CASES = "/api/cases";

const API_LIST_CASES = (pan: any, selectedProgram?: any) => {
  return `/api/cases/${pan}?selectedProgram=${selectedProgram}`;
};

const API_Notification = (executiveId: any) => {
  return `/api/notification/admin/${executiveId}`;
};

export const GET_KPI_HOME = "api/financiers/dashboard/kpi";
export const LIMIT_NONANCHOR_INVOICE =
  "api/limitHistory/availablelimit/invoice";

const API_LIST_CASE = (caseId: any) => {
  return `/api/cases/${caseId}`;
};

export const API_MOVE_FROM_REJECT = `/api/cases/scfReview`;

const API_ENTITY_DETAIL = (caseId: any) => {
  return `/api/cases/program-details/${caseId}`;
};

const API_REJECT_CASE = `/api/cases`;

const API_NOTIFICATION_SEEN = `/api/notification/seen`;
const API_FINANCIER_USER_DELETE = `/api/financiers/inActive/user`;

//  (rejectedStatus: any) => {
//   return `/api/cases/${rejectedStatus._id}/reject?type=${rejectedStatus.system}`;
// };
export const API_FAWORD_TO_LENDER_CASE = (foarwordStatus: any) => {
  return `/api/cases/farword/${foarwordStatus._id}?status=${foarwordStatus.status}`;
};

const GET_REJECTED_PROGRAM = (
  search: string = "",
  anchorId: string = "",
  organisationId: string = "",
  entityProgramRole: string = "",
  anchorSort: string = "",
  page: number = 1,
  limit: number = 10
) => {
  // if (sessionStorage.pageNumber) page = sessionStorage.pageNumber
  return `/api/program/listprogram/rejected/?anchor=${anchorId}&entity=${organisationId}&entityProgramRole=${entityProgramRole}&anchorSort=${anchorSort}&page=${page}&limit=${limit}&search=${search}`;
};

export const API_LIST_ENTITIES_FILTER = "/api/program/listprogram/filter";

//Program
const API_PROGRAM = "/api/program";
const API_SEARCH_PROGRAM = (searchInput: string) => {
  return `/api/program/search?search=${searchInput}`;
};

const API_PROGRAM_CAS = (anchorId: string) => {
  return `/api/program/details/${anchorId}`;
};

const API_PROGRAM_INVOICE_GENID = (generatedProgramId: string) => {
  return `/api/program/programid/invoices/genId/${generatedProgramId}`;
};

// anchor search api
const API_ANCHOR_SEARCH_PROGRAM = (searchInput: string) => {
  return `/api/program/searchs?searchs=${searchInput}`;
};

const API_Unallocated_Limit_BY_ANCHOR_ID = (anchorId: string) => {
  return `/api/program/unallocatedLimit/${anchorId}`;
};

const API_NEW_PROGRAM = "/api/program/create";

//uers API
const API_USERS = "/api/scfusers";
const API_FINANCIER_USERS = "/api/financiers/add/user";

const API_POST_LOGIN = "/api/auth/login/admin";
const API_GET_WHO_AM_I = "/api/auth/whoami/admin";

// program configure page api call

const API_FINANCIERS = "/api/financiers";

// Save data from program configure

const API_PROGRAM_SAVE = "/api/organization/case/program";

const API_DECISION_SUMMARY = (caseId: any) => {
  return `/api/cases/${caseId}/decision-summary`;
};

const API_BANK_DETAILS = (caseId: any) => {
  return `/api/cases/${caseId}/bank-accounts`;
};

const API_DEVIATION = (caseId: string) => {
  return `/api/cases/${caseId}/deviation-metrics`;
};

const API_UPDATE = (programId: any) => {
  return `/api/program/detail/${programId}`;
};

const API_PROGRAM_DELETE_CHARGES = (programId: any, chargeId: any) => {
  return `/api/program/detail/delete/${programId}/${chargeId}`;
};

const API_GST_BY_PAN = "/api/cases/search/gst-by-pan";

const API_SEARCH_CASES = (searchInput: string) => {
  return `/api/cases/search/cases?searchKeyWord=${searchInput}`;
};

const API_FOR_PROGRAM_CONFIGURATION = (programId: any) => {
  return `/api/program/detail/isConfigured/${programId}`;
};

const API_TO_GET_FINANCIER_USERS = (financierId: any) => {
  return `/api/financiers/get/user/${financierId}`;
};

const API_POST_DECISION_COMMENTS = "/api/cases/decision-summary";

const API_VERIFY_GST = "/api/cases/verify-gstin";

const API_TO_GET_BUYER_SELLER_DETAILS = (anchorId: any) => {
  return `/api/anchor/program/${anchorId}`;
};

export const API_LOGS_INVOICES = "/api/invoicelogs/create";

const API_ANCHOR_NAME = "/api/anchor/anchorsss";

const GET_API_ANCHOR_NAME = (anchorType: string) => {
  return `/api/program/entityName/${anchorType}`;
};

const GET_OUTSTANDING = (programId: any) => {
  return `/api/dailyIntrest/${programId}/outStanding`;
};

export const GET_OUTSTANDING_SETTLEMENT = (programId: any) => {
  return `/api/program/totalOutstanding/${programId}`;
};

const SAVE_PROGRAM_GST_DETAILS = `/api/program/gstdetails`;
export const UPDATE_PROGRAM_WITH_TYPE_BLOCK = `/api/program/update-program`;

const UPDATE_BLOCK_LIMIT = `/api/program/updateBlock-limt`;

const GET_PROGRAMS_DETAILS_WITH_FINANCERS = (
  financierId: any = "",
  invoiceStatus: string = "",
  pageNumber: number = 1,
  limit: number = 10,
  search: string = "",
  entity: string = "",
  entityProgramRole: string = ""
) => {
  // if (sessionStorage.pageNumber) page = sessionStorage.pageNumber
  return `/api/financiers/program?financierId=${financierId}&invoiceStatus=${invoiceStatus}&page=${pageNumber}&limit=${limit}&search=${search}&entity=${entity}&entityProgramRole=${entityProgramRole}`;
};

export const get_AllProgramOrganisation_ByFinancier = `/api/userfinancer/userprograms/org`;

const ADD_ANOTHER_DETAILSDATA = (caseId: any) => {
  return `/api/program/addAnother/${caseId}`;
};
const SAVE_PROGRAM_APPLICANT_DETAILS = (caseId: any) => {
  return `/api/program/addapplicantDetails/${caseId}`;
};

export const GET_PROGRAM_DETAILS_ALL = (programId: any) => {
  return `/api/program/allprogram-details/${programId}`;
};

const BANK_CREATED = (caseId: any) => {
  return `/api/cases/createBank/${caseId}`;
};

export const GET_ALLANCHOR_FINANCERS = "/api/program/programsforFilter/Anchor";

const API_AVILABLE_LIMIT = (generatedProgramId: any) => {
  return `/api/limitHistory/Limits/${generatedProgramId}`;
};

const EDIT_PROGRAM = (programId: any) => {
  return `/api/program/programEdit/Data/${programId}`;
};

const EDIT_INTREST = `/api/program/intrest/edit/intrest`;

const API_DEVIATION_DESCRIPTION = (caseId: string) => {
  return `/api/cases/${caseId}/descriptionCodes`;
};

export const UPDATE_STATUS_OF_PROGRAM_REJECTED = "/api/program/update-status";

const API_CREATE_DEVIATION = "/api/cases/deviation-metric";

//repayment api
export const GET_REPAYMENT_DETAILS_DATA = `/api/program/repayment/tab/list`;
export const GET_REPAYMENT_DETAILS_FILTER = `/api/program/repayment/tab/filter`;
export const GET_PROGRAM_DEATAILS_BY_IDS = `/api/program/one-programs-details`;
export const GET_INVOICES_SETTELED_LIST = `/api/invoices/one-programs/invoices`;

export const GET_ANCHOR_INVOICES = `/api/invoices/anchor/invoices`;

export const GET_NON_ANCHOR_INVOICES = `/api/invoices/non-anchor/invoices`;

export const GET_INVOICE_DETAILS = `/api/userfinancer/invoiceDetails`;

export const GET_INVOICE_HOSTORY_BY_PROGRAM = `/api/invoices/programs/invoiceDetails`;

export const API_POST_VERIFY_CAPTCHA = "/api/auth/verify-captcha";

export const ADD_REPAYMENT = `/api/repayment/repayments`;
export const BULK_UPLOAD_DETAILS = `/api/invoices/programs/bulkrepayment`;
export const ADD_WAIVERS = `/api/invoices/programs/waivers`;
export const GET_INVOICES_SETTELED_LIST_FILTER = `/api/invoices/programs/filter`;

export const GET_INVOICE_LOGS = `/api/invoicelogs/logs`;
export const GET_INVOICE_LOGS_INTEREST = `/api/invoicelogs/logsInterest`;
export const GET_INVOICE_LOGS_LMS = `/api/invoicelogs/lms/invoice`;
export const API_TRANSACTION_DET = "/api/program/soa";
export const API_SOA_DET = "/api/program/soaDetails";
export const API_SOA_DETAIL = "/api/program/programSoa/generatedProgramId";
export const API_SOA_DETAIL_LMS_GENID =
  "/api/program/soaLmsDetails/generatedProgramId";
export const API_SOA_DETAIL_LMS = "/api/program/soaLmsDetails";
export const DELETE_SCFUSER_BY_PROGRAM = "/api/scfusers/delete";

export const API_CREATE_DECISION_CODE = "/api/cases/decision-summary";
const API_DECISION_CODE = (caseId: string) => {
  return `/api/cases/${caseId}/decisionCodes`;
};

export const CASE_DETAILS = "/api/casesFromCas";
export const API_GST_LIST_FOR_A_CASE = (caseId: any) =>
  `api/casesFromCas/${caseId}/listGst`;
export const API_SALES_PURCHASE_DATA = (
  caseId: any,
  salesType: any,
  gst: string,
  removeIntraOrgSales: boolean,
  isGSTR1Checked: boolean,
  isGSTR3BChecked: boolean
) =>
  `api/casesFromCas/${caseId}/sales-purchase?salesType=${salesType}&gst=${gst}&gstType=${
    isGSTR1Checked ? "gstr1" : "gstr3b"
  }&removeIntraOrgSales=${removeIntraOrgSales}`;
export const GET_MONTHLY_ABB_CREDITS_DEBTS = (caseId: any) =>
  `api/casesFromCas/${caseId}/credits-debits-abb`;

//financierTab
export const UPDATE_INVOICE_STATUS_DATA = `/api/userfinancer/invoiceDetails`;
export const GET_INVOICE_BY_PROGRAMS = `/api/userfinancer/userprogramsinvoices`;
export const GET_API_INVOICE_FILTER = `api/program/programid/invoices/filter`;
export const API_PROGRAM_BY_FINANCIER = `/api/userfinancer/userprograms`;

// const API_PROGRAM_HISTORY =  {
//   return `/api/program/programHistory`;
// };
export const API_PROGRAM_HISTORY = "/api/program/programHistory";

export const API_ANCHOR_LIST = "/api/Report";

const API_NONANCHOR_NAME = (generatedProgramId: any) => {
  return `/api/Report/non-anchor/${generatedProgramId}`;
};

const API_FINANCIER_PROGRAM = (_id: any, type: any) => {
  return `/api/Report/program/financier/${_id}?programType=${type}`;
};

const API_PDF_GENERATED = `/api/Report/GenratePDF`;

export {
  API_LIST_ANCHOR,
  API_LIST_PROGRAM,
  API_PROGRAM_DETAIL,
  PATCH_INVOICE_STATUS,
  API_GET_FINANCIERS_SCF,
  API_LIST_FINANCIER_DETAILS,
  API_Unallocated_Limit_BY_ANCHOR_ID,
  GET_OUTSTANDING,
  API_USERS,
  API_POST_LOGIN,
  API_LIST_CASE,
  API_PROGRAM,
  API_LIST_ENTITIES,
  API_SEARCH_PROGRAM,
  API_GET_WHO_AM_I,
  API_REJECT_CASE,
  API_FINANCIER_USER_DELETE,
  GET_REJECTED_PROGRAM,
  API_LIST_FOR_ANCHOR,
  API_ANCHOR_SEARCH_PROGRAM,
  API_FINANCIERS,
  API_PROGRAM_SAVE,
  API_LIST_CASES,
  API_DECISION_SUMMARY,
  API_BANK_DETAILS,
  API_DEVIATION,
  API_PROGRAM_CAS,
  API_GST_BY_PAN,
  API_UPDATE,
  API_PROGRAMS,
  API_PROGRAM_DELETE_CHARGES,
  API_PROGRAM_CONFIGURE,
  API_SEARCH_CASES,
  API_FOR_PROGRAM_CONFIGURATION,
  API_POST_DECISION_COMMENTS,
  API_VERIFY_GST,
  API_TO_GET_BUYER_SELLER_DETAILS,
  API_FINANCIER_USERS,
  GET_API_ANCHOR_NAME,
  API_TO_GET_FINANCIER_USERS,
  SAVE_PROGRAM_GST_DETAILS,
  API_GET_FINANCIERS,
  GET_PROGRAMS_DETAILS_WITH_FINANCERS,
  API_NEW_PROGRAM,
  API_ANCHOR_NAME,
  API_ENTITY_DETAIL,
  API_GENERATEDPROGRAMID_INVOICES,
  ADD_ANOTHER_DETAILSDATA,
  SAVE_PROGRAM_APPLICANT_DETAILS,
  API_INVOICE,
  API_Eligible_PROGRAMM,
  API_POST_BULK_INVOICE,
  API_USER_PROGRAM,
  API_ALL_PROGRAM,
  UPDATE_BLOCK_LIMIT,
  API_PROGRAM_INVOICE_GENID,
  API_CHECK_NON_ANCHOR,
  API_AVILABLE_LIMIT,
  BANK_CREATED,
  EDIT_PROGRAM,
  API_DECISION_CODE,
  API_DEVIATION_DESCRIPTION,
  API_CREATE_DEVIATION,
  API_INVOICE_BULK_STATUS_CHANGE,
  // API_PROGRAM_HISTORY,
  EDIT_INTREST,
  API_Notification,
  API_NOTIFICATION_SEEN,
  API_NONANCHOR_NAME,
  API_FINANCIER_PROGRAM,
  API_PDF_GENERATED,
};
