import React from "react";
import "./Vision.css";

const visionContent = [
  {
    title: "Socio-Economic & Demographic Intelligence",
    description:
      "We decode income patterns, consumption behavior, poverty dynamics, migration trends, and social mobility across urban and rural divides. Whether mapping inequality hotspots or forecasting livelihood shifts, our socio-economic models help clients design targeted interventions and inclusive growth strategies.",
  },
  {
    title: "Political & Governance Analytics",
    description:
      "We measure public sentiment, voting behavior, policy acceptance, and governance effectiveness using survey data, social media signals, and administrative records. This enables political campaigns, think tanks, and governments to craft responsive, data-backed strategies.",
  },
  {
    title: "Rural & Urban Development Analytics",
    description:
      "From agricultural productivity and rural electrification to urban housing affordability and smart-city readiness, we bridge the rural-urban data gap. Our geospatial and econometric models power evidence-based policymaking and investment prioritization.",
  },
  {
    title: "Finance & Economic Forecasting",
    description:
      "We deliver financial inclusion analysis, credit risk modeling in underserved markets, remittances impact assessments, and macroeconomic scenario planning. Clients rely on us for investment feasibility studies, market sizing, and financial policy insights.",
  },
  {
    title: "Health Insights",
    description:
      "Using national surveys, hospital records, and real-time outbreak data, we analyze disease burden, access disparities, maternal & child health, and nutrition security. Our predictive models support epidemic preparedness and program evaluation.",
  },
  {
    title: "Education & Human Capital Development",
    description:
      "We track learning outcomes, skill gaps, dropout patterns, and education ROI across regions. Our work informs scholarship targeting, teacher deployment strategies, EdTech readiness, and long-term human capital planning.",
  },
  {
    title: "Entertainment & Sports Market Research",
    description:
      "We analyze audience preferences, content consumption trends, celebrity influence, OTT dynamics, sports viewership, fan engagement, and sponsorship ROI—helping media houses, platforms, and brands maximize reach and revenue.",
  },
];

const Vision = () => {
  return (
    <section className="vision-section">
      <div className="container">

        <h2 className="vision-title">What We Do</h2>
        <p className="vision-subtitle">
          In a world drowning in information, what separates insight from noise is expertise.  
          At Jubilant Data Studio, we transform complex multi-dimensional data into 
          actionable, high-impact strategies for governments, corporations, NGOs, businesses, 
          and development organizations.
        </p>

        <div className="vision-grid">
          {visionContent.map((item, index) => (
            <div className="vision-card" key={index}>
              <h3 className="vision-card-title">{item.title}</h3>
              <p className="vision-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="vision-footer">
          <p>
            <strong>Our approach combines:</strong><br />
            • Multi-source data integration (surveys, satellite, administrative, digital exhaust)<br />
            • Advanced econometrics & ML tailored to emerging markets<br />
            • Storytelling that converts insights into decisions<br />
            • Strict ethical & contextual data practices
          </p>

          <p className="contact-text">
            Let’s turn your data challenge into strategic advantage.<br />
            Contact: <strong>jubilantds@gmail.com</strong>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Vision;
