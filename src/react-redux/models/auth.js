const initialState = {
  isLogged: false,
  token: null,
  userData: [],
};

const auth = {
  state: initialState, // initial state
  reducers: {
    // handle state changes with pure functions
    login(state, payload) {
      // const userRole = getUserRole(payload?.id_token);
      return {
        ...state,
        token: payload?.data.tokens.accessToken,
        userData: payload?.data?.user,
      };
    },
    auth(state) {
      return {
        ...state,
        isLogged: true,
      };
    },
  },
  effects: (dispatch) => ({
    logoutAsync() {
      dispatch({ type: "RESET_APP" });
      localStorage.removeItem("token");
    },
  }),
};

export default auth;
