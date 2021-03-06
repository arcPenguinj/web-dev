import profile_data from "../components/a8/Build/data/profile_data.json";

const profile = (state = profile_data, action) => {
  switch (action.type) {
    case 'save-profile':
      return action.save;

    case 'fetch-profile':
      return action.profile;

    default:
      return state;
  }
};

export default profile;