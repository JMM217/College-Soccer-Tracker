// PROCESSING LAYER: Business logic and filtering rules for college soccer programs

// Filter programs based on criteria
function filterSoccerPrograms(programs, filters = {}) {
  return programs.filter(program => {
    // Filter by gender if specified ('Men' or 'Women')
    if (filters.gender && program.gender !== filters.gender) {
      return false;
    }
    
    // Filter by division if specified ('NCAA D1', 'NCAA D2', etc.)
    if (filters.division && program.division !== filters.division) {
      return false;
    }

    // Filter by search keyword (school name, city, or state)
    if (filters.keyword) {
      const query = filters.keyword.toLowerCase();
      const matchName = program.name.toLowerCase().includes(query);
      const matchCity = program.city.toLowerCase().includes(query);
      const matchState = program.state.toLowerCase().includes(query);
      
      if (!matchName && !matchCity && !matchState) {
        return false;
      }
    }

    return true;
  });
}
