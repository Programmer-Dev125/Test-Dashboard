export const links = [
    {
        id: 1,
        title: "Dashboard",
        icon: "dashboard",
        link: "home"
    },
    {
        id: 2,
        title: "Perpectives",
        icon: "perspective",
        link: "perspectives"
    },
    {
        id: 3,
        title: "Tasks",
        icon: "task",
        link: "tasks"
    },
    {
        id: 4,
        title: "Documents",
        icon: "doc",
        link: "documents"
    },
    {
        id: 5,
        title: "Reports",
        icon: "report",
        link: "reports"
    },
    {
        id: 6,
        title: "User & Roles",
        icon: "userRole",
        link: "user"
    },
    
]

export const timelines = [
    {
        id: 1,
        upper: "Mar 17",
        below: "Kickoff Workshop",
        fill: true
    },
    {
        id: 2,
        upper: "Mar 17",
        below: "Kickoff Workshop",
        fill: true
    },
    {
        id: 3,
        upper: "Mar 17",
        below: "Kickoff Workshop",
        fill: true
    },
    {
        id: 4,
        upper: "Mar 17",
        below: "Kickoff Workshop",
        fill: false
    },
    {
        id: 5,
        upper: "Mar 17",
        below: "Kickoff Workshop",
        fill: false
    },
    {
        id: 6,
        upper: "Mar 17",
        below: "Kickoff Workshop",
        fill: false
    },
]

export const homeStats = [
    {
        id: 1,
        title: "Total Criteria",
        final: 95,
        iconName: "folder"
    },
    {
        id: 2,
        title: "Completed Criteria",
        final: 52,
        iconName: "folderCheck"
    },
    {
        id: 3,
        title: "Evidence Documents",
        final: 386,
        iconName: "docHeart"
    },
    {
        id: 4,
        title: "Evidence(Completed)",
        final: 302,
        iconName: "docCheck"
    },
    {
        id: 5,
        title: "Uploaded To DGA",
        final: 258,
        iconName: "docArrow"
    }
]

export const statuses = [
    {
        id: 1,
        title: "Not Started",
        color: "var(--sec)"
    },
    {
        id: 2,
        title: "In Progress",
        color: "var(--yel)"
    },
    {
        id: 3,
        title: "Completed",
        color: "var(--success)"
    },
    {
        id: 4,
        title: "Partially Upload",
        color: "#004479"
    },
    {
        id: 5,
        title: "Fully Uploaded",
        color: "var(--info)"
    },
    {
        id: 6, 
        title: "Delayed",
        color: "var(--danger)"
    }
]

export const strategies = [
    {
        id: 1,
        title: "Strategy and Planning",
        final: 97.78,
    },
    {
        id: 2,
        title: "Organization and Culture",
        final: 70.83,
    },
    {
        id: 3,
        title: " Operations and Execution",
        final: 80.00,
    },
    {
        id: 4,
        title: " Business Continuity",
        final: 90.59,
    },
    {
        id: 5,
        title: " Information Technology",
        final: 97.78,
    },
    {
        id: 6,
        title: "Strategy and Planning",
        final: 75.00,
    },
    {
        id: 7,
        title: "Comprehensive Governance",
        final: 64.44,
    },
    {
        id: 8,
        title: " Channels and Services",
        final: 100,
    },
    {
        id: 9,
        title: " Beneficiary Centralization",
        final: 60.00,
    },
    {
        id: 10,
        title: " Government Data",
        final: 87.50,
    },
    {
        id: 11,
        title: " Research and Innovation",
        final: 17.65,
    },
]
// 1- success
// 2- yellow
// 3-info
// 4-danger
export const mainData = [
    [
        {
            id: 1,
            title: "Digital Information",
            types: [ 1, 1, 1 ],
            parentClassName: "items-end",
            className: "grid-cols-3" 
// 
        },
        {
            id: 2,
            title: "Digital Governance",
            types: [ 1, 1, 2 ],
            parentClassName: "items-end",
            className: "grid-cols-3" 
// 
        }, 
        {
            id: 3,
            title: "Enterprise Achitecture",
            types: [1, 1, 1, 1],
            parentClassName: "items-end",
            className: "grid-cols-2 gap-y-4"  
// 
        }
    ], 
    [
        {
            id: 1,
            title: "Digital Culture and Environment",
            types: [ 1, 2, 1 ],
            parentClassName: "items-end",
            className: "grid-cols-3" 
// 
        },
        {
            id: 2,
            title: " Leadership Development",
            types: [ 1, 1, 1, 1 ],
            parentClassName: "items-end",
            className: "grid-cols-2 gap-y-4" 
// 
        },
        {
            id: 3,
            title: "Skills & Capacity Building",
            types: [2, 2, 2],
            parentClassName: "items-end",
            className: "grid-cols-3" 
// 
        }
    ],
    [
        {
            id: 1,
            title: "Business Processes",
            types: [1, 2, 2, 1],
            parentClassName: "items-center",
            className: "grid-cols-2 gap-y-4 " 
        }
    ],
    [
        {
            id: 1,
            title: "Risk Management",
            types: [1, 1, 1, 1, 1],
            parentClassName: "items-center",
            className: "grid-cols-2 gap-y-4" 
        },
        {
            id: 2,
            title: "Business Continuity",
            types: [1, 5, 5, 1, 1, 5, 1],
            parentClassName: "items-center",
            className: "grid-cols-2 gap-y-4" 
        },
    ],
    [
        {
            id: 1,
            title: "Support Systems",
            types: [3, 1, 1, 1, 1],
            parentClassName: "items-end",
            className: "grid-cols-3 gap-y-4"
        },
// 
        {
            id: 2,
            title: "IT Infrastructure",
            types: [1, 1, 1, 1, 3, 1, 1],
            parentClassName: "items-center",
            className: "grid-cols-3 gap-y-2 py-2"
        },
        {
            id: 3,
            title: " Cloud Infrastructure",
            types: [1, 1, 3],
            parentClassName: "items-end",
            className: "grid-cols-3"
        },
// 
    ],
    [
        {
            id: 1,
            title: "Governance Platforms",
            types: [1, 1, 1, 5, 1, 1, 1, 1, 1],
            parentClassName: "items-center",
            className: "grid-cols-2 gap-y-3"
        }
    ],
    [
        {
            id: 1,
            title: "Service Quality",
            types: [1, 1, 1],
            parentClassName: "items-center",
            className: "grid-cols-2 gap-y-4"
        },
        {
            id: 2, 
            title: "Digital Channels",
            types: [1, 1, 1, 1],
            parentClassName: "items-center",
            className: "grid-cols-2 gap-y-4"
        }
    ],
    [
        {
            id: 1,
            title: "User Engagement",
            types: [1, 2, 2, 2],
            parentClassName: "items-end",
            className: "grid-cols-3 gap-y-3"
        },
// 
        {
            id: 2,
            title: "User Relationship",
            types: [1, 2, 2],
            parentClassName: "items-end",
            className: "grid-cols-3"
        },
// 
        {
            id: 3,
            title: "User Experience",
            types: [1, 2, 1, 2, 1],
            parentClassName: "items-center",
            className: "grid-cols-3 gap-y-3"
// 
        }
    ],
    [
        {
            id: 1,
            title: "Data Governance",
            types: [1, 2, 2],
            parentClassName: "items-end",
            className: "grid-cols-3 gap-y-3"
        },
// 
        {
            id: 2,
            title: "Data Usage & Availability",
            types: [1, 2, 2],
            parentClassName: "items-end",
            className: "grid-cols-3"
        },
// 
        {
            id: 3,
            title: "Open Data",
            types: [1, 1, 2],
            parentClassName: "items-end",
            className: "grid-cols-3"
        }
// 
    ],
    [
        {
            id: 1,
            title: "Innovation",
            types: [4, 4, 4, 4],
            parentClassName: "items-center",
            className: "grid-cols-2 gap-y-4"
        },
        {
            id: 2,
            title: "Creating Solutions",
            types: [2, 4],
            parentClassName: "items-end h-[80%]",
            className: "grid-cols-2"
        },
    ]
]

export const leaders = [
    {
        id: 1,
        name: "Ahmed Al-Ali",
        title: "Strategy Perspective",
        percentage: "96%"
    },
    {
        id: 2,
        name: "Ahmed Al-Ali",
        title: "Strategy Perspective",
        percentage: "96%"
    },
    {
        id: 3,
        name: "Ahmed Al-Ali",
        title: "Strategy Perspective",
        percentage: "96%"
    },
]

export const activties = [
    {
        id: 1,
        text: "Document “Strategy_Review.pdf” was uploaded by Ahmed Khaled",
        time: "5 Mins Ago"
    },
    {
        id: 2,
        text: "Document “Strategy_Review.pdf” was uploaded by Ahmed Khaled",
        time: "5 Mins Ago"
    },
    {
        id: 3,
        text: "Document “Strategy_Review.pdf” was uploaded by Ahmed Khaled",
        time: "5 Mins Ago"
    },
]

export const persData = [
    {
        id: 1,
        title: "Total Evidence",
        final: 4,
        icon: "docLayer"
    },
    {
        id: 2,
        title: "Under Review Evidence",
        final: 3,
        icon: "docSearch"
    },
    {
        id: 1,
        title: "In Progress Evidence",
        final: 2,
        icon: "docRightArrow"
    },
    {
        id: 1,
        title: "Completed Evidence",
        final: 1,
        icon: "docBan"
    },
]
