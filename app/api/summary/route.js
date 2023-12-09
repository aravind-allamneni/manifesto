export const GET = async (request, { params }) => {
  const tasks = [
    {
      title: "Praja Darbar",
      percentCompletion: 100,
      category: "Good Governance",
      _id: 1,
      description:
        "Restore PRAJA DARBAR at the CM camp office. MLA will hold regular PRAJA DARBARS",
      image: "/assets/good_governance.png",
    },
    {
      title: "Free travel for women in TSRTC",
      percentCompletion: 100,
      category: "Mahalakshmi",
      _id: 7,
      description:
        "Free travel for women in TSRTC buses(Ordinary, Express, City & Metro) across the state",
      image: "/assets/mahalakshmi.png",
    },
    {
      title: "Action on BRS Govt Corruption",
      percentCompletion: 0,
      category: "Good Governance",
      _id: 2,
      description:
        "Full-fledged inquiry by a retired High Court Judge on the various scandal and corruption allegations in the rule of the BRS",
      image: "/assets/good_governance.png",
    },
    {
      title: "Right to Public Services",
      percentCompletion: 0,
      category: "Good Governance",
      _id: 3,
      description:
        "The Right to Public Services Act will be introduced. A comprehensive portal will be set-up to receive public complaints",
      image: "/assets/good_governance.png",
    },
    {
      title: "Re-organization of District/Mandals",
      percentCompletion: 0,
      category: "Good Governance",
      _id: 4,
      description:
        "Review Re- organization of District / Mandals, to create a few more new districts. One of the New Districts will be named after Late. Shri P.V Narasimha Rao",
      image: "/assets/good_governance.png",
    },
    {
      title: "Financial assistance to Women.",
      percentCompletion: 0,
      category: "Mahalakshmi",
      _id: 5,
      description: "Rs. 2,500 monthly financial assistance to women.",
      image: "/assets/mahalakshmi.png",
    },
    {
      title: "Gas Cylinders at Rs. 500",
      percentCompletion: 0,
      category: "Mahalakshmi",
      _id: 6,
      description: "Gas Cylinders at Rs. 500",
      image: "/assets/mahalakshmi.png",
    },
    {
      title: "Financial assistance to farmers",
      percentCompletion: 0,
      category: "Rythu Bharosa",
      _id: 8,
      description:
        "Financial assistance of Rs. 15,000 per acre to farmers, tenant farmers; Rs. 12,000 to agricultural labour will be provided every year",
      image: "/assets/rythubharosa.png",
    },
    {
      title: "Bonus of Rs. 500 for paddy per quintal",
      percentCompletion: 0,
      category: "Rythu Bharosa",
      _id: 9,
      description: "Bonus of Rs. 500 for paddy per quintal",
      image: "/assets/rythubharosa.png",
    },
    {
      title: "200 units free electricity",
      percentCompletion: 0,
      category: "Gruha Jyothi",
      _id: 10,
      description: "200 units free electricity for all households",
      image: "/assets/gruhajyothi.png",
    },
    {
      title: "House site & Rs.5 lakh house",
      percentCompletion: 0,
      category: "Indiramma Indlu",
      _id: 11,
      description:
        "Families not owning a house will be provided a house site & Rs. 5 lakh financial assistance towards construction of the house.",
      image: "/assets/indirammaindlu.png",
    },
    {
      title: "House site for TG fighters",
      percentCompletion: 0,
      category: "Indiramma Indlu",
      _id: 12,
      description:
        "All Telangana movement fighters will be provided a 250 sq yards house site.",
      image: "/assets/indirammaindlu.png",
    },
    {
      title: "Vidya Bharosa Card",
      percentCompletion: 0,
      category: "Yuva Vikasam",
      _id: 13,
      description:
        "Vidya Bharosa Card - A financial assistance card worth Rs. 5 lakh, will be provided to students which can be used in payment of college fees (in addition to fee reimbursement).",
      image: "/assets/yuvavikasam.png",
    },
    {
      title: "Telangana International Schools",
      percentCompletion: 0,
      category: "Yuva Vikasam",
      _id: 14,
      description:
        "Telangana International Schools will be built in every mandal.",
      image: "/assets/yuvavikasam.png",
    },
    {
      title: "Pension of Rs. 4,000",
      percentCompletion: 0,
      category: "Cheyutha",
      _id: 15,
      description:
        "Monthly pension of Rs. 4,000 will be provided to senior citizens, widows, disabled, beedi workers, single women, today tappers, weavers, AIDS and Filaria patients and kidney patients undergoing dialysis.",
      image: "/assets/cheyutha.png",
    },
    {
      title: "Rajiv Aarogyasri",
      percentCompletion: 0,
      category: "Cheyutha",
      _id: 16,
      description:
        "Rajiv Aarogyasri - Health insurance of Rs.10 lakh will be provided.",
      image: "/assets/cheyutha.png",
    },
    {
      title: "Loans waiver",
      percentCompletion: 0,
      category: "Warangal Rythu Declaration",
      _id: 17,
      description:
        "Waive off crop loans of 2 lakhs at once, as soon as INC assumes power.",
      image: "/assets/rythubharosa.png",
    },
    {
      title: "Reopen sugar factories",
      percentCompletion: 0,
      category: "Warangal Rythu Declaration",
      _id: 18,
      description:
        "Reopen all the closed sugar factories and establish the Turmeric Board.",
      image: "/assets/rythubharosa.png",
    },
    {
      title: "Insurance & MGNREGA",
      percentCompletion: 0,
      category: "Warangal Rythu Declaration",
      _id: 19,
      description:
        "Introduce a credible crop insurance scheme that immediately compensates farmers for crop losses. Agriculture labour and tenant farmers also to be covered under the Rythu Bheema scheme. Integrate agricultural work with the MGNREGA scheme.",
      image: "/assets/rythubharosa.png",
    },
    {
      title: "Protect the land ownership",
      percentCompletion: 0,
      category: "Warangal Rythu Declaration",
      _id: 20,
      description:
        "Provide complete ownership rights, along with the right to sale, resale for Podu lands farmers and assigned lands' beneficiaries. Scrap the Dharani portal and replace it with a new revenue mechanism that protects ownership rights of everyone.",
      image: "/assets/rythubharosa.png",
    },
    {
      title: "Farmers Commission",
      percentCompletion: 0,
      category: "Warangal Rythu Declaration",
      _id: 21,
      description:
        "Farmers Commission to be formed to offer a permanent resolution on outstanding farm issues. Prepare a new agriculture policy and crop planning considering the climatic conditions of Telangana, with the aim of making agriculture more profitable",
      image: "/assets/rythubharosa.png",
    },
    {
      title: "Honoring Telangana Movement Martyrs",
      percentCompletion: 0,
      category: "Hyderabad Youth Declaration",
      _id: 22,
      description:
        "Martyrs of the Telangana recognised and job will be given to one person from their family. Additionally, a monthly honorary pension of Rs.25,000 will be given to their mother/father/wife. All cases filed against youth who participated in the agitation will be withdrawn.",
      image: "/assets/yuvavikasam.png",
    },
    {
      title: "Government Jobs",
      percentCompletion: 0,
      category: "Hyderabad Youth Declaration",
      _id: 23,
      description:
        "2 lakh government jobs will be filled in the first year. SC, ST, BC and Minority backlog posts will be filled in the first year. Annual job calendar with vacancies in all departments will be released every year",
      image: "/assets/yuvavikasam.png",
    },
    {
      title: "Unemployment Allowance",
      percentCompletion: 0,
      category: "Hyderabad Youth Declaration",
      _id: 24,
      description:
        "Monthly unemployment allowance of Rs. 4000 will be given to every unemployed youth till they are provided with employment or livelihood opportunities",
      image: "/assets/yuvavikasam.png",
    },
    {
      title: "Revamp TSPSC",
      percentCompletion: 0,
      category: "Hyderabad Youth Declaration",
      _id: 25,
      description:
        "A new law to revamp TSPSC, on the lines of UPSC, will be enacted.",
      image: "/assets/yuvavikasam.png",
    },
    {
      title: "Eradicating Unemployment",
      percentCompletion: 0,
      category: "Hyderabad Youth Declaration",
      _id: 26,
      description:
        "Telangana will be transformed into a state with zero unemployment through centralized online registration portal, creating employment exchanges in 7 plus zones and establishing skill development centers in every district.",
      image: "/assets/yuvavikasam.png",
    },
    {
      title: "Youth Commission",
      percentCompletion: 0,
      category: "Hyderabad Youth Declaration",
      _id: 27,
      description:
        "A Youth Commission will be set up to provide interest free loans of upto Rs 10 lakhs to facilitate education and livelihood opportunities. A special Gulf Cell will be established to regulate gulf agents; to facilitate, enhance & leverage employment opportunities in the Gulf countries",
      image: "/assets/yuvavikasam.png",
    },
    {
      title: "Fee Reimbursement & Higher Education",
      percentCompletion: 0,
      category: "Hyderabad Youth Declaration",
      _id: 28,
      description:
        "Fee reimbursement will be provided for students belonging to SC, ST, BC, Minority and EWS categories and all old dues will be cleared. Palamuru, Telangana, Mahatma Gandhi, Satavahana universities will be upgraded into integrated universities and new integrated universities will be set up in Adilabad, Khammam and Medak. 4 new IIITs will be established, on the lines of Rajiv Gandhi IIIT in Basara, to provide quality education to the rural students. A world class Sports University will be established on the lines of IMG academy of the USA to support rural sportspersons. 2 Educational Institutions will be established in Warangal and Hyderabad for the children of Police and RTC employees to provide quality education from 6 standard to graduation.",
      image: "/assets/yuvavikasam.png",
    },
    {
      title: "Women Empowerment",
      percentCompletion: 0,
      category: "Warangal Rythu Declaration",
      _id: 29,
      description:
        "Electric scooters will be provided to all young women above 18 years of age & are pursuing education.",
      image: "/assets/yuvavikasam.png",
    },
  ];
  return new Response(JSON.stringify(tasks), { status: 200 });
};
