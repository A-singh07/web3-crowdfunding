import eduImage from '../assets/categories/education.svg';
import medicalImage from '../assets/categories/medical.svg';
import communityImage from '../assets/categories/community.svg';
import environmentImage from '../assets/categories/environment.svg';
import childrenImage from '../assets/categories/children.svg';
import animalImage from '../assets/categories/animal.svg';
import othersImage from '../assets/categories/others.svg';

export const fundCategories = [
  {
    categoryId: 1234,
    categoryName: 'Education',
    categoryImage: eduImage.src
  },
  {
    categoryId: 1235,
    categoryName: 'Medical',
    categoryImage: medicalImage.src
  },
  {
    categoryId: 1236,
    categoryName: 'Community',
    categoryImage: communityImage.src
  },
  {
    categoryId: 1237,
    categoryName: 'Animals',
    categoryImage: animalImage.src
  },
  {
    categoryId: 1238,
    categoryName: 'Children',
    categoryImage: childrenImage.src
  },
  {
    categoryId: 1239,
    categoryName: 'Environment',
    categoryImage: environmentImage.src
  },
  {
    categoryId: 1240,
    categoryName: 'Others',
    categoryImage: othersImage.src
  }
]

// For Fund Cards
export const fundsData = [
  {
    id: 12345,
    category: "Medical",
    Admin_status: "Pending",
    description: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
    raiseAmount: `25000`,
    target: `100000`,
    progress: '25'
  },
  {
    id: 12346,
    category: "Charity",
    Admin_status: "Approved",
    description: "cajnsjc na soci charity servie cporicna s o",
    raiseAmount: `10000`,
    target: `50000`,
    progress: '20'
  },
  {
    id: 12347,
    category: "Medical",
    Admin_status: "In-process",
    description: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
    raiseAmount: `25000`,
    target: `100000`,
    progress: '25'
  },
  {
    id: 12348,
    category: "Medical",
    Admin_status: "Rejected",
    description: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
    raiseAmount: `25000`,
    target: `100000`,
    progress: '25'
  },
  {
    id: 12349,
    category: "Medical",
    Admin_status: "Approved",
    description: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
    raiseAmount: `25000`,
    target: `100000`,
    progress: '25'
  },
  {
    id: 12340,
    category: "Medical",
    Admin_status: "Pending",
    description: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
    raiseAmount: `25000`,
    target: `100000`,
    progress: '25'
  }
]

// All Funds page
export const fundsPageData = [
  {
    categoryId: 1235,
    categoryName: 'Medical',
    funds: [
      {
        id: 12345,
        category: "Medical",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada risus non porta congue.",
        raiseAmount: `25000`,
        target: `50000`,
        progress: '50'
      },
      {
        id: 12347,
        category: "Medical",
        description: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
        raiseAmount: `13400`,
        target: `80000`,
        progress: '40'
      },
      {
        id: 12348,
        category: "Medical",
        description: "Aenean non lorem hendrerit, vehicula libero mollis, dapibus sapien.",
        raiseAmount: `25000`,
        target: `100000`,
        progress: '25'
      },
      {
        id: 12349,
        category: "Medical",
        description: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
        raiseAmount: `25000`,
        target: `100000`,
        progress: '25'
      },
      {
        id: 12630,
        category: "Medical",
        description: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
        raiseAmount: `25000`,
        target: `100000`,
        progress: '25'
      }
    ]
  },
  {
    categoryId: 1236,
    categoryName: 'Community',
    funds: [
      {
        id: 12365,
        category: "Community",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada risus non porta congue.",
        raiseAmount: `65000`,
        target: `100000`,
        progress: '65'
      },
      {
        id: 12368,
        category: "Community",
        description: "Aenean non lorem hendrerit, vehicula libero mollis, dapibus sapien.",
        raiseAmount: `80000`,
        target: `100000`,
        progress: '80'
      },
      {
        id: 12660,
        category: "Community",
        description: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
        raiseAmount: `80000`,
        target: `100000`,
        progress: '80'
      },
      {
        id: 12395,
        category: "Community",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada risus non porta congue.",
        raiseAmount: `65000`,
        target: `100000`,
        progress: '65'
      },
    ]
  },
  {
    categoryId: 1234,
    categoryName: 'Education',
    funds: [
      {
        id: 12365,
        category: "Education",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada risus non porta congue.",
        raiseAmount: `65000`,
        target: `100000`,
        progress: '65'
      },
      {
        id: 12368,
        category: "Education",
        description: "Aenean non lorem hendrerit, vehicula libero mollis, dapibus sapien.",
        raiseAmount: `80000`,
        target: `100000`,
        progress: '80'
      },
      {
        id: 12660,
        category: "Education",
        description: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
        raiseAmount: `80000`,
        target: `100000`,
        progress: '80'
      }
    ]
  },
  {
    categoryId: 1237,
    categoryName: 'Animals',
    funds: []
  },
  {
    categoryId: 1238,
    categoryName: 'Children',
    funds: []
  },
  {
    categoryId: 1239,
    categoryName: 'Environment',
    funds: []
  },
  {
    categoryId: 1240,
    categoryName: 'Others',
    funds: []
  }
]

export const fundDetails = {
  id: 1242,
  description: `Fundraiser for Medical Support `,
  category: 'Medical',
  image: '',
  desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor commodo diam, et condimentum risus pharetra in. In lobortis viverra augue, vitae finibus ipsum. Duis pretium ornare libero. Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. lobortis erat facilisis. Nullam semper sagittis lobortis. Maecenas lacinia felis sit amet aliqu
  Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. Maecenas consectetur elementum vehicula. Praesent mollis sem.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor commodo diam, et condimentum risus pharetra in. In lobortis viverra augue, vitae finibus ipsum. Duis pretium ornare libero. Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. lobortis erat facilisis. Nullam semper sagittis lobortis. Maecenas lacinia felis sit amet aliqu
  Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. Maecenas consectetur elementum vehicula. Praesent mollis sem.
  diam at libero vulputate, at lobortis risus lobortis. Maecenas consectetur elementum vehicula. Praesent mollis sem.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor commodo diam, et condimentum risus pharetra in. In lobortis viverra augue, vitae finibus ipsum. Duis pretium ornare libero. Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. lobortis erat facilisis. Nullam semper sagittis lobortis. Maecenas lacinia felis sit amet aliqu
  Curabitur elementum diam at libero vulputate, at`,
  document: '',
  minAmount: 500,
  raiseAmount: 60000,
  target: 100000,
  supporters: '12,86,700',
  deadline: '15th October 2022',
  receipent: '0x12a1aC5d3a66fC330fD0685C024a919c8r5',
}