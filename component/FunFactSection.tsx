interface Fact {
  icon: string;
  count: string;
  text: string;
  color: string;
}

const FunFactSection: React.FC = () => {
  const facts: Fact[] = [
    {
      icon: "fa fa-bullseye",
      count: "20%",
      text: "Credential Compromise",
      color: "bg-blue-200",
    },
    {
      icon: "fa fa-shield",
      count: "10%",
      text: "Ransomware upward trend",
      color: "bg-pink-200",
    },
    {
      icon: "fa fa-cog",
      count: "$4.35M",
      text: "Average total cost of a data breach",
      color: "bg-blue-300",
    },
    {
      icon: "fa fa-database",
      count: "15%",
      text: "More than one Data Breach",
      color: "bg-orange-200",
    },
  ];

  return (
    <section className="fun-fact-section py-12 bg-gray-100">
      <div className="auto-container container mx-auto px-4">
        <div className="fact-counter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="counter-column text-center animate-fadeIn"
              style={{ animationDelay: `${index * 400}ms` }}>
              <div className="inner-column">
                <span
                  className={`icon ${fact.icon} ${fact.color} p-4 rounded-full text-4xl`}></span>
                <div className="count-box text-3xl font-bold my-4">
                  {fact.count}
                </div>
                <div className="text text-gray-600">{fact.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactSection;
