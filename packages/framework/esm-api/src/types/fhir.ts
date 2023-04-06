/*
Originally taken from https://github.com/FHIR/fhir.js/blob/ec82ccfc125e05dbb645f47c100fe60f2c34bb73/src/fhir.d.ts
Has been adapted to be even better - if we can get fhir.js to publish a good version to npm with better typedefs,
we can remove this file in favor of the one they maintain
*/

export type ResourceName =
  | "DomainResource"
  | "Organization"
  | "Location"
  | "HealthcareService"
  | "Practitioner"
  | "Patient"
  | "RelatedPerson"
  | "Device"
  | "Account"
  | "AllergyIntolerance"
  | "Schedule"
  | "Slot"
  | "Appointment"
  | "AppointmentResponse"
  | "AuditEvent"
  | "Basic"
  | "BodySite"
  | "Substance"
  | "Medication"
  | "Group"
  | "Specimen"
  | "DeviceComponent"
  | "DeviceMetric"
  | "ValueSet"
  | "Questionnaire"
  | "QuestionnaireResponse"
  | "Observation"
  | "FamilyMemberHistory"
  | "DocumentReference"
  | "DiagnosticOrder"
  | "ProcedureRequest"
  | "ReferralRequest"
  | "Procedure"
  | "ImagingStudy"
  | "ImagingObjectSelection"
  | "Media"
  | "DiagnosticReport"
  | "CommunicationRequest"
  | "DeviceUseRequest"
  | "MedicationOrder"
  | "NutritionOrder"
  | "Order"
  | "ProcessRequest"
  | "SupplyRequest"
  | "VisionPrescription"
  | "ClinicalImpression"
  | "Condition"
  | "EpisodeOfCare"
  | "Encounter"
  | "MedicationStatement"
  | "RiskAssessment"
  | "Goal"
  | "CarePlan"
  | "Composition"
  | "Contract"
  | "Coverage"
  | "ClaimResponse"
  | "Claim"
  | "Communication"
  | "StructureDefinition"
  | "ConceptMap"
  | "OperationDefinition"
  | "Conformance"
  | "DataElement"
  | "DetectedIssue"
  | "DeviceUseStatement"
  | "DocumentManifest"
  | "EligibilityRequest"
  | "EligibilityResponse"
  | "EnrollmentRequest"
  | "EnrollmentResponse"
  | "ExplanationOfBenefit"
  | "Flag"
  | "Immunization"
  | "ImmunizationRecommendation"
  | "ImplementationGuide"
  | "List"
  | "MedicationAdministration"
  | "MedicationDispense"
  | "OperationOutcome"
  | "MessageHeader"
  | "NamingSystem"
  | "OrderResponse"
  | "PaymentNotice"
  | "PaymentReconciliation"
  | "Person"
  | "ProcessResponse"
  | "Provenance"
  | "SearchParameter"
  | "Subscription"
  | "SupplyDelivery"
  | "TestScript"
  | "Binary"
  | "Bundle"
  | "Parameters";
