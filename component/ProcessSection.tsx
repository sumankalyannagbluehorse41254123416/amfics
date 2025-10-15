const ProcessSection: React.FC = () => {
  return (
    <section
      className="process-section py-12 bg-cover bg-center"
      style={{
        backgroundImage: "url(https://amfics.io/images/background/2.jpg)",
      }}>
      <div className="auto-container container mx-auto px-4">
        <div className="life text-center">
          <h3 className="text-3xl font-bold text-white">Life Cycle Method</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="method_img">
            <img
              src="https://amfics.io/images/Method_1.png"
              alt="Method 1"
              className="w-full"
            />
          </div>
          <div className="method_img_2">
            <img
              src="https://amfics.io/images/Method_2.png"
              alt="Method 2"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
