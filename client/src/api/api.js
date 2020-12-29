const { NODE_ENV, REACT_APP_API_PATH, REACT_APP_PORT } = process.env;
const LOCAL_API_PATH = `http://${REACT_APP_API_PATH}:${REACT_APP_PORT}`;

const api = async (route, method, data) => {
  route = NODE_ENV === "development" ? `${LOCAL_API_PATH}${route}` : route;
  const response = await fetch(route, {
    method,
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects.
};

export const getGoals = () => api("/goals/", "GET");
export const postGoal = (data) => api("/goals/", "POST", data);
export const editGoal = (id, data) => api(`/goals/${id}/`, "PUT", data);
export const deleteGoal = (id) => api(`/goals/${id}/`, "DELETE");
