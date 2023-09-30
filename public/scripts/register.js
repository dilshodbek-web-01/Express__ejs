btn.onClick = async (e) => {
  if (username.value && email.value && password.value) {
    let response = await fetch("http://localhost:5003/register", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      }),
    });
    const res = await response.json();

    if (res.location) {
      window.location = "/" + res.location;
    }
  }
};
