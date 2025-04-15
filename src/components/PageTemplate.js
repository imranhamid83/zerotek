const PageTemplate = ({ title, children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
      <div className="bg-white rounded-lg shadow-sm p-6">
        {children}
      </div>
    </div>
  );
};

export default PageTemplate; 