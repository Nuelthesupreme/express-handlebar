$(".devour").on("click", (event) => {
    const id = event.target.id;
    const ajaxOptions = {
      url: `/api/foods/${id}`,
      method: "PUT",
    };
  
    const onData = () => {
      window.location.reload();
    };
  
    $.ajax(ajaxOptions).then(onData);
  });