// fsq3mj2A0VspnYWK4+vbVBnn7HXeKvz/T7eHbEKbV1xCxBY=

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: "fsq3mj2A0VspnYWK4+vbVBnn7HXeKvz/T7eHbEKbV1xCxBY=",
  },
};

fetch(
  "https://api.foursquare.com/v3/places/search?query=coffee&ll=43%2C-79",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
