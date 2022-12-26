const generateUrlObject = (url) => {
  const URI = new URL(url);
  const preparedObject = {
    protocol: URI.protocol,
    hostname: URI.hostname,
  };
  let child = preparedObject;
  const arrayWithPath = URI.pathname.substring(1).split("/");
  arrayWithPath.forEach((element, _) => {
    child.child = {
      path: element,
    };
    child = child.child;
  });
  console.log(preparedObject);
};
generateUrlObject("https://www.google.com/doodles/rubiks-cube/a/a/a");
