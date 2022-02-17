
const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

// There are four different types of for loop in JS - For, For in, For of, foreach

// // Simple Iteration using FOR Loop and Printing Each companys name in the console.
for(let i=0;i<companies.length;i++){
    console.log(companies[i].name);
};

// // Simple Iteration using FOREACH Loop and Printing Each companys name in the console.
companies.forEach((value)=>console.log(value.name));

// // Simple Iteration using FOR IN Loop and Printing Each companys name in the console
for (let key in companies){
    console.log(companies[key].name);
}

// // Simple Iteration using FOR OF Loop and Printing Each companys category in the console

for (let key of companies){
    console.log(key.category);
}


// My Resume data in JSON Format.

const resumeData =[{ 
    name: " Arun Kumar Balasubramani ",
    title: "Analyst, Senior Associate",
    contact:{
        address: "Chennai, TN, 603202",
        phone: +91-1234567890,
        email:"arunkumar.vbs.b@gmail.com"},
    skills:["Good at Time Management.","Willingness to take responsibilities and learn new things."," Ability to Work within Turn Around Time (TAT)","Self-Motivated","Good communication skills"],
    education:{
        College:"PSNA College of Engineering and Technology,Dindigul, TN",
        degree:"Bachelor of Engineering: Mechanical Engineering",
        Year: "Aug-2014 to May-2018" }  ,
    workhistory:[{
            Year:"Jan-2021 to Present",
            company:"Numeric Technologies, Hyderabad",
            role:"Programming Analyst"},
            {
            Year:"Aug-2018 to Dec-2020",
            company:"Wipro Technologies, Chennai, Tamil Nadu.",
            role:"Senior Associate"},
    ],
    softwareSkills:["SAP SD","MSOffice"]

}]
   

console.log(JSON.stringify(resumeData));


