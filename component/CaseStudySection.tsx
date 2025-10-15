const CaseStudySection: React.FC = () => {
  return (
    <section className="case-study-section py-12">
      <div className="auto-container container mx-auto px-4">
        <div className="sec-title text-center">
          <h3 className="text-3xl font-bold">
            It’s not about IF, It’s about WHEN
          </h3>
          <div className="text mt-4 text-gray-600">
            It means that it’s not a matter of if a company or organization will
            be targeted by a cyberattack, but rather when. Cyberattacks have
            become more sophisticated and frequent over the years, and no one is
            immune to them.
          </div>
          <div className="banner_text mt-6 text-gray-700">
            <p>
              According to Verizon Data Breach Investigations Report (DBIR),
              though there are many trends that have been considered for the
              study. It’s important to note the following.
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>
                There are four key paths leading to your estate: Credentials,
                Phishing, Exploiting vulnerabilities, and Botnets. These four
                pervade all areas of the DBIR, and no organization is safe
                without a plan to handle them all. The priority being to protect
                the Credential information.
              </li>
              <li>
                This year, Ransomware has continued its upward trend with an
                almost 13% increase–a rise as big as the last five years
                combined (for a total of 25% this year). It’s important to
                remember, Ransomware by itself is just a model of monetizing an
                organization’s access. Blocking the four key paths mentioned
                above helps to block the most common routes Ransomware uses to
                invade your network.
              </li>
              <li>
                Error continues to be a dominant trend and is responsible for
                13% of breaches. This finding is heavily influenced by
                misconfigured cloud storage. While this is the second year in a
                row that we have seen a slight levelling out for this pattern,
                the fallibility of employees should not be discounted.
              </li>
            </ul>
            <p className="mt-4">
              Based on the IBM's Cost of a Data Breach report, the global
              average total cost of a data breach increased by USD 0.11 million
              to USD 4.35 million in 2022, the highest it’s been in the history
              of this report. The increase from USD 4.24 million in the 2021
              report to USD 4.35 million in the 2022 report represents a 2.6%
              increase. In the last two years, the average total cost has
              increased 12.7% from USD 3.86 million in the 2020 report.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
