const faqQuestion = [
  {
    question: "Administrative Closings: What is an Administrative Closing?",
    link: "http://dev.wcpc.us/FAQ/adminclos.html",
    keywords: [/Administrative/i, /Administrative Closing/i],
    answer:
      "All cases administratively closed on or after July 1, 2011 include an order, per MCR 5.206, that the fiduciary pay $100 for the reimbursement of court costs.",
  },
  {
    question: "Bonds: What is a bond? When would a bond be obtained?",
    link: "http://dev.wcpc.us/FAQ/bonds.htm",
    keywords: [/bond/i],
    answer:
      "What is a probate bond ?\nA probate bond is an insurance policy that protects assets and income in an estate, trust, or conservatorship from certain actions of the fiduciary .",
  },
  {
    question:
      "Copy Request: How do I request a copy of a document(s) on a case? How do I receive a copy of a court file?",
    link: "http://dev.wcpc.us/FAQ/copyrequest.htm",
    keywords: [/copy request|copy|court file/i],
    answer:
      "Certified Copy - $11 for the 1st page and $1 for each subsequent page per document,  pursuant to MCL 600.2546 Standard Copy - $2 per page, pursuant to Local Administrative Order 2020-02 .",
  },
  {
    question: "Courtroom Contact: How do I contact a courtroom?",
    link: "http://dev.wcpc.us/wheredoifile.pdf",
    keywords: [/courtroom|contact/i],
    answer:
      "Documents regarding any of the following items, will only be accepted by email, fax or  mail at this time, to the appropriate department at the bottom of the page. ",
  },
  {
    question:
      "ePayment Instructions: How do I pay online? Can I pay onlineE-Payment Instructions",
    link: "http://dev.wcpc.us/ePay/ePaymentInstructions.pdf",
    keywords: [/Instructions|e-payment|epayment/i],
    answer:
      "General Information regarding ePayment:\n1. ePayment is a web service which allows for the online payment of existing court fees and costs via credit card.\n2. ePayment has a 3.5% convenience fee or $3.00 whichever is greater.",
  },
  {
    question:
      "ePayment Expectations: I paid online, where is my hearing date/Letter of Authority, certified copy?",
    link: "http://dev.wcpc.us/filing.html#processingDelays",
    keywords: [/Expectations|Authority|certified copy|e-payment|epayment/i],
    answer:
      "After your filing has been processed, you will receive notice to pay any requisite fees.",
  },
  {
    question:
      "Government Parties: Where can I find addresses for Miscellaneous Government Parties for Notification in Probate Proceedings?",
    link: "http://dev.wcpc.us/AttyTrain/miscgovtaddr.pdf",
    keywords: [/government|party|parties|Miscellaneous|Probate/i],
    answer:
      "MCR 5.125(A)(1) requires that the Michigan Attorney General must be served in specific probate proceedings when the decedent is not survived by any known heirs .",
  },
  {
    question: "Hearings: How do I attend a Zoom hearing?",
    link: "http://dev.wcpc.us/Info/ZoomNoticeOfHearing.pdf",
    keywords: [/hearing|zoom/i],
    answer:
      "1.You must identify yourself with the Judge’s clerk when you join the Zoom hearing.\n2.If you are connecting using a camera, APPROPRIATE DRESS IS REQUIRED FOR ALL COURT PROCEEDINGS .",
  },
  {
    question:
      "Hearings: When is my hearing? How do I access filings on my case?",
    keywords: [/hearing|filing/i],
    newPageRouteLink: "https://public.wcpc.us/eservices/home.page.2",
    answer:
      "Important Notice about eAccess\nPlease be advised to allow pop-ups if you are not able to view images within the case. ",
  },
  {
    question: "Hearings: I didn’t get a hearing notice, how do I access it?",
    keywords: [/hearing|notice/i],
    newPageRouteLink: "https://public.wcpc.us/eservices/home.page.2",
    answer:
      "Important Notice about eAccess\nPlease be advised to allow pop-ups if you are not able to view images within the case.",
  },
  {
    question:
      "Independent Evaluator List: Where can I find a list of Independent Evaluators?",
    keywords: [/Independent|Evaluator/i],
    link: "http://dev.wcpc.us/Info/ime_evaluatorlist.pdf",
    answer:
      "LIST OF INDIVIDUALS WHO HAVE EXPRESSED INTEREST IN ACTING AS INDEPENDENT EVALUATOR IN MENTAL HEALTH PROCEEDINGS\nDr. Daniel Blake\n26711 Woodward Avenue, Suite 309A\nHuntington Woods, MI 48070 \n(248) 330-8267 \nDsb726@aol.com ",
  },
  {
    question: "Interpreters: How do I get an interpreter for my hearing?",
    keywords: [/Interpreter|hearing/i],
    link: "http://dev.wcpc.us/FAQ/Interpreter.htm",
    answer:
      "Only the petitioner, respondent, and a witness are entitled to an interpreter by right. MCR 1.111(A)(2)&(B)(1). ",
  },
  {
    question: "Jobs: How can I get a job at Wayne County Probate Court?",
    keywords: [/job|Wayne|County/i],
    link: "http://dev.wcpc.us/job.html",
    answer:
      "Any position(s) currently available and qualifications for the classification posted will be linked to this web page under this section.\nClick here to see currently available Wayne County Probate Court job opportunities.",
  },
  {
    question: "Legal Aid: Where can I find Legal Aid/Legal Services?",
    keywords: [/Legal|Aid/i],
    link: "http://dev.wcpc.us/Info/LegalAid.pdf",
    answer:
      "WAYNE COUNTY LEGAL AID - LEGAL SERVICES:\nWAYNE COUNTY NEIGHBORHOOD LEGAL SERVICES\n7310 Woodward Ave., Suite 301\nDetroit, MI 48202 313-964-1975",
  },
  {
    question:
      "Legal Advice: How do I receive an interpretation of the law? How do I receive procedural advice? How can I receive research of the law? Do I need a guardianship?",
    keywords: [/Legal|interpretation|research|procedural advice|guardianship/i],
    link: "http://dev.wcpc.us/FAQ/LegalAdvice.htm",
    answer:
      "Court personnel shall not provide or offer to provide legal advice or legal counsel to a fiduciary or an interested person and shall not complete a form, petition, or document for a fiduciary or interested person.",
  },
  {
    question:
      "Letters of Authority - How do I obtain an updated Letter of Authority with a new expiration date?",
    keywords: [/Legal|expiration|Authority/i],
    link: "http://dev.wcpc.us/FAQ/updLOA.htm",
    answer:
      "If your Annual Report (GA/GM case) or Annual Account (CA/CY case) or Notice of Continued Administration (DE case) is due, the court must first receive and process that filing before issuing updated Letters. ",
  },
  {
    question:
      "No known Heirs: What is the decedent is not survived by any known heirs? Who do I notify?",
    keywords: [/Heirs|decedent/i],
    link: "http://dev.wcpc.us/FAQ/agaddress.htm",
    answer:
      "MCR 5.125(A)(1) requires that the Michigan Attorney General must be served in specific probate proceedings when the decedent is not survived by any known heirs, or the protected individual has no known presumptive heirs.",
  },
  {
    question:
      "Notice of Hearing: How do I give Notice of a Hearing to the interested parties on the case? Who do I have to notify?",
    keywords: [/Heirs|decedent/i],
    link: "http://dev.wcpc.us/WebStandards/noticehearing.html",
    answer:
      "As the person who filed a petition in Wayne County Probate Court, you must give Notice of the Hearing to all interested persons. ",
  },
  {
    question:
      "Transcript: How do I obtain a written transcript? How do I obtain a copy of my hearing? Do I need a transcript to appeal?",
    keywords: [/Transcript|appeal/i],
    link: "http://dev.wcpc.us/FAQ/recordsrequest.htm",
    answer:
      "How can I access probate court records?\nYou may go to the Court’s website, www.wcpc.us, and click on the “Case Access” tab.",
  },
  {
    question: "Where do I file: Where do I file documents?Where do I file",
    keywords: [/file|document/i],
    link: "http://dev.wcpc.us/wheredoifile.pdf",
    answer:
      "Documents regarding any of the following items, will only be accepted by email, fax or mail at this time, to the appropriate department at the bottom of the page. ",
  },
  {
    question:
      "Will Copy: How do I obtain a copy of my will that I filed with the court?",
    keywords: [/copy|filed/i],
    link: "http://dev.wcpc.us/FAQ/obtainingownwill.htm",
    answer:
      "To withdraw your will, send an email request (with a copy of your photo identification) to probateservice@wcpc.us, or submit this request in written form via mail or drop-box at the court.",
  },
  {
    question: "Will Filing: How do I submit a will?",
    keywords: [/will filing|submit a will/i],
    link: "http://dev.wcpc.us/WebStandards/Wills.html",
    answer:
      "An individual’s will (and codicil*(s)) may be deposited with the probate court in the county where that individual resides. ",
  },
  {
    question:
      "Will Advice: How do I create a will, do I need an attorney to create a will?",
    keywords: [/will advice|create a will/i],
    link: "http://dev.wcpc.us/FAQ/LegalAdvice.htm",
    answer:
      "Court personnel shall not provide or offer to provide legal advice or legal counsel to a fiduciary or an interested person and shall not complete a form, petition, or document for a fiduciary or interested person.",
  },
  {
    question:
      "Will Search: How do I find out if a will is on file for someone else? How do I receive a copy of someone else's will?",
    keywords: [/will search|receive a copy/i],
    link: "http://dev.wcpc.us/FAQ/willinquiry.htm",
    answer:
      "The Court will check to see if a will has been filed for safekeeping when a death certificate is presented (in PDF form, as an attachment, if it's being emailed) to the Court. ",
  },
  {
    question: "Adoption Records: How do I get access to Adoption records?",
    keywords: [/Adoption Record/i],
    link: "http://dev.wcpc.us/FAQ/adoptionrecords.htm",
    answer:
      "Probate Court does not have adoption records.You must contact the Adoptions Unit, which is part of the Juvenile Section of the Family Division of the Wayne County Circuit Court.",
  },
  {
    question:
      "Child Custody Action and Minor Guardianship Proceeding, what is the difference?",
    keywords: [/Child Custody Action|Minor Guardianship Proceeding|Custody/i],
    link: "http://dev.wcpc.us/FAQ/childcustodyaction.htm",
    answer:
      "What is a child custody action?\nA custody action is brought under the Michigan Child Custody Act, MCL 722.21 et. seq. Custody cases are filed in Circuit Court.",
  },
  {
    question: "Child Support Questions",
    keywords: [/Child Support Questions|child support/i],
    link: "http://dev.wcpc.us/FAQ/childsupport.htm",
    answer:
      "Child Support is handled by the Wayne County Friend of the Court.\nThey can be contacted as follows:\nPhone Number: (313) 224-5300",
  },
  {
    question: "Guardianship/Conservatorship for Adult Questions",
    keywords: [/Guardianship|Conservatorship|Adult Question/i],
    link: "http://dev.wcpc.us/FAQ/adultgc.htm",
    answer: "Refer to FAQ in the given link",
  },
  {
    question: "Guardianship/Conservatorship for Minors Questions",
    keywords: [/Guardianship|Conservatorship/i],
    link: "http://dev.wcpc.us/FAQ/minorgc.htm",
    answer: "Refer to FAQ in the given link",
  },
  {
    question: "Juvenile Court Questions",
    keywords: [/Juvenile|Court Question/i],
    link: "http://dev.wcpc.us/FAQ/juvenile.htm",
    answer:
      "The Juvenile Court is part of the Family Division of the Wayne County Circuit Court. Juvenile Court handles abuse eglect cases, delinquency cases, and adoptions .",
  },
  {
    question: "Name Change: How do I obtain a copy of a name change order?",
    keywords: [/name change|change name|change order/i],
    link: "http://dev.wcpc.us/FAQ/namechangecopyreq.htm",
    answer:
      "To obtain information about copies of name changes prior to January 1, 1998, please send a detailed email to: filedept@wcpc.us",
  },
  {
    question: "Power of Attorney questions",
    keywords: [/Attorney question|Attorney/i],
    link: "http://dev.wcpc.us/FAQ/powerofattorney.htm",
    answer:
      "A Power of Attorney is a written and notarized document giving a person the legal power to act on behalf of another person according to the terms of the Power of Attorney. ",
  },
  {
    question:
      "Sale of Real Estate: What is the process to sell real estate in a Probate Case?",
    keywords: [/sale|real estate/i],
    link: "http://dev.wcpc.us/FAQ/saleofrealestate.htm",
    answer:
      "The Court is prohibited by law (Sec. 1211 of the Estates and Protected Individuals Code [EPIC]) from providing legal advice and completing forms. ",
  },
  {
    question:
      "Settlements and Judgements Involving Minors and Legally Incapacitated Individuals",
    keywords: [/Settlement|Judgement|Incapacitate/i],
    link: "http://dev.wcpc.us/WebStandards/settlement.html",
    answer:
      "The Michigan Supreme Court requires the use of MC 95,*Request for Approval of Bond and Notice Settlement/Judgment/Wrongful Death Settlement (MC95) .",
  },
  {
    question:
      "Dead Bodies: How can I move a body (disinterment)? How can I get a casket opened (exhumation)?",
    keywords: [/dead|move a body|disinterment|casket|exhumation/i],
    link: "http://dev.wcpc.us/FAQ/deadbodies.htm",
    answer:
      "The Probate Court has no jurisdiction to have a body moved (i.e., disinterred).You should contact the funeral home that handled the burial .",
  },
  {
    question:
      "Cost of Living Adjustments: What are the EPIC Cost of Living Adjustments for each year?",
    keywords: [/Cost of Living|epic|Living Adjustments/i],
    link: "http://dev.wcpc.us/Info/EPICCOLA.pdf",
    answer: "Refer to table given in link for court adjustment procedures",
  },
  {
    question:
      "Tax Exemption: What are the Federal Estate Tax Exemption Amounts?",
    keywords: [/Tax Exemption|Federal|Estate Tax Exemption|Exemption Amount/i],
    link: "http://dev.wcpc.us/FAQ/taxamt.htm",
    answer:
      "The Economic Growth and Tax Relief Reconciliation Act of 2001 (EGTRRA) increased the unified credit, i.e. the amount of a decedent’s assets which are exempt from federal estate tax. ",
  },
  {
    question:
      "Intestate Succession: Who receives the assets when someone dies without a will?",
    keywords: [/Intestate|without a will|someone die/i],
    link: "http://dev.wcpc.us/FAQ/intestsucc.htm",
    answer:
      "Where a Michigan decedent dies without a Will, the decedent’s real and personal property (other than joint property, insurance, etc.) after payment of debts, taxes, family allowance and exempt property is distributed to the following.",
  },
  {
    question:
      "Medical Records of the Decedent: How can I obtain medical records of the decedent?",
    keywords: [/Medical|Medical Record/i],
    link: "http://dev.wcpc.us/FAQ/medicalrecords.htm",
    answer:
      "A formal Petition for Probate andor Appointment of Personal Representative (TestateIntestate) (PC 559 ) must be filed and include a request that a special personal representative be appointed.",
  },
  {
    question:
      "Michigan Public Administrators: Who are the Public Administrators in Michigan?",
    keywords: [/Michigan|Administrator/i],
    newPageRouteLink:
      "https://www.michigan.gov/ag/-/media/Project/Websites/AG/public-administrator/CPA-LIST-July-14-2023.pdf?rev=cf2ae81d33394a058f905c6ea26d80a9&hash=D13AB9B0E51D5AA64E5CB580CD6AC69A",
    answer: "Link is not working giving 404",
  },

  {
    question:
      "Money from Employer: What happens to the unpaid wages or fringe benefits from the decedent's employer?",
    keywords: [/Employer|fringe|unpaid wage/i],
    link: "http://dev.wcpc.us/FAQ/wages.htm",
    answer:
      "If a decedent dies with no probate assets (i.e., owns nothing in their name alone) except for unpaid wages andor fringe benefits, the wages andor fringe benefits can be paid directly to the individuals entitled to receive them without opening an estate in the Probate Court.",
  },
  {
    question:
      "Motor Vehicles: How can a vehicle be transferred out of the decedent's name?",
    keywords: [/Motor Vehicle|vehicle be transfer|vehicle transfer/i],
    link: "http://dev.wcpc.us/FAQ/motorvehicle.htm",
    answer:
      "If a decedent dies with no probate assets (i.e., owns nothing in their name alone) except for one or more motor vehicles whose total value is not more than $60,000 .",
  },
  {
    question: "Reopening Decedent's Estate Questions",
    keywords: [/Reopening Decedent|Estate/i],
    link: "http://dev.wcpc.us/FAQ/reopenestate.htm",
    answer:
      "Michigan law prohibits court employees from providing legal advice and completing forms, petitions, or documents. MCL 700.1211. Click here for a list of legal aidlegal services .",
  },
  {
    question:
      "Sale of Real Estate: What is the process to sell real estate in a Probate case?",
    keywords: [/sale of real estate Decedent|sell real|Estate/i],
    link: "http://dev.wcpc.us/FAQ/saleofrealestate.htm",
    answer:
      "Note : The Court is prohibited by law (Sec. 1211 of the Estates and Protected Individuals Code [EPIC]) from providing legal advice and completing forms. ",
  },
  {
    question:
      "Will Filed With the Court: How do I obtain a copy of my will that I filed with the Court?",
    keywords: [/will file|copy of will|i file/i],
    link: "http://dev.wcpc.us/FAQ/obtainingownwill.htm",
    answer:
      "To withdraw your will, send an email request (with a copy of your photo identification) to probateservice@wcpc.us ",
  },
  {
    question:
      "Will Search: How do I find out if a will is on file for someone else? How do I receive a copy of someone else's will?",
    keywords: [/will search|file/i],
    link: "http://dev.wcpc.us/FAQ/willinquiry.htm",
    answer:
      "The Court will check to see if a will has been filed for safekeeping when a death certificate is presented (in PDF form, as an attachment, if it's being emailed) to the Court. ",
  },
  {
    question: "Guardianship and Estates Ombudsman",
    keywords: [/Guardianship|Ombudsman/i],
    link: "http://dev.wcpc.us/WebStandards/ombud.htm",
    answer:
      "The Wayne County Probate Court Estates and Guardianship Ombudsman receives and investigates complaints regarding guardianship, conservatorship, and decedent’s estates under the Court’s jurisdiction.",
  },
  {
    question: "List of Court Approved Mediators",
    keywords: [/Approved|Mediator|list of court/i],
    link: "http://dev.wcpc.us/Info/mediatorlist.pdf",
    answer: "Refer to table given in link for court approved mediators",
  },
  {
    question: "Mediation Guide - Questions and Answers",
    keywords: [/Mediation/i],
    link: "http://dev.wcpc.us/Info/MediationGuide.pdf",
    answer:
      "Mediation is a process in which a neutral third party assists communication between interested persons.",
  },
  {
    question: "Mediator Application (MC 281)",
    keywords: [/Mediator|Mediator Application|mc 281|281/i],
    newPageRouteLink:
      "https://www.courts.michigan.gov/siteassets/forms/scao-approved/mc281a.pdf",
    answer: "link is not working does not have acesss",
  },
  {
    question: "WCPC ADR Plan",
    keywords: [/wcpc|adr plan|wcpc plan/i],
    link: "http://dev.wcpc.us/Info/Proposed_WCPC_ADR_Plan_LAO_2022.pdf",
    answer:
      "This administrative order is issued in accordance with Michigan Court Rule 2.410 Alternative Dispute  Resolution, effective August 1, 2000, as amended. ",
  },
  {
    question: "Mediation Status Report (MC 280) to be completed by Mediator ",
    keywords: [/Mediation status|report 280|280|mc 280|Mediation/i],
    link: "http://dev.wcpc.us/Info/MediationStatusReport.pdf",
    answer: "Refer to table given in link for Mediation Status Report",
  },
  {
    question: "Site Map",
    keywords: [/site|map|site map/i],
    link: "http://dev.wcpc.us/WebStandards/wcpcsitemap.bmp",
    answer: "Refer to flow diagram given in link",
  },
  {
    question: "Privacy Statement Disclaimer",
    keywords: [/Privacy|Disclaimer/i],
    link: "http://dev.wcpc.us/WebStandards/privacydisclaimer.htm",
    answer:
      "The purpose of this website is to provide accurate and helpful information about the Wayne County Probate Court’s services and related activities.",
  },
  {
    question:
      "SCAO Language Access Information (link: http://courts.mi.gov/self-help/interpreter/pages/default.aspx)",
    keywords: [/scap|self help|slai/i],
    newPageRouteLink:
      "http://courts.mi.gov/self-help/interpreter/pages/default.aspx",
    answer: "link is not working does not have acesss",
  },
  {
    question: "Michigan Legal Help(link:http://www.michiganlegalhelp.org/)",
    keywords: [/Michigan|Legal help/i],
    link: "http://dev.wcpc.us/WebStandards/langaccesscoord.htm",
    answer:
      "Jennifer Parmalee\nWayne County Probate Court\n1305 Coleman A. Young Municipal Center\nDetroit, Mich. 48226",
  },
  {
    question: "Language Access Plan (LAP) Coordinator Language Access Plan",
    keywords: [/lap|clap/i],
    link: "http://dev.wcpc.us/Info/websitepolicy.pdf",
    answer:
      "Language Access Coordinator\nJennifer Parmalee\nWayne County Probate Court",
  },
  {
    question: "Website Standards and Guidelines",
    keywords: [/Website standard|Guideline/i],
    link: "http://dev.wcpc.us/Info/websitepolicy.pdf",
    answer:
      "The following person is responsible for oversight of website design and legitimacy of content (Website DesignerContent Coordinator):\nApril K. Maycock Probate Register and Director of Information Services",
  },
];

export { faqQuestion };
