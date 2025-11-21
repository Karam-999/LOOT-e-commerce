const CategoryFilters = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {categories.map(cat => {
        const Icon = cat.icon;
        return (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 border-2 ${
              selectedCategory === cat.id 
                ? 'bg-black text-white border-black shadow-lg scale-105' 
                : 'bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="font-bold">{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilters;
