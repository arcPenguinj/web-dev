import profile_data from "../components/a7/Build/data/profile_data.json";

const profile = (state = profile_data, action) => {
  switch (action.type) {
    case 'save-profile':
      return action.save;

    default:
      return state;
  }
};

export default profile;