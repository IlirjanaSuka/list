

document.addEventListener("DOMContentLoaded", function () {
  const data = [
    { title: "The DTL",content: "Does the domain extension match the language of the  domain name?", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREPHmYoUEa7qfBSySjj1CoaMCc_vTwjarwHI-200XGSgaZma0Hr064DRCKqrML_MA71hQ&usqp=CAU" },
    { title: "Domain Length", content: "Is the domain short enough to \n remember?", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHQTBBHSHJvzjVSYOezUDYSU5Ln43qLY_gcw&usqp=CAU" },
    { title: "Language", content: "How complex is the actual domain \n name?", imageUrl: "data:image/png;base64,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"},
    { title: "Internatinal recognition", content: "Can the domain name be used on an \n International scale?", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSextoWd6txr7BEpSzFLKWbRISKZnnXcjo-SA&usqp=CAU" },
    { title: "Search engine", content: "Does the domain follow search \n engine guidelines?", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxWYeT4sV6ui-N7ponqKJc7IfkLrfSOxfXYw&usqp=CAU" },
    { title: "Advertising Potential", content: "Could the domain be used for \n advertising campaigns?", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2pO_-zAWZT3BvKWQqkxizk11ZGqtwYhtBKSHb6VcpijXkM7uoET67Z0fcJEmIEizoWk&usqp=CAU" },
    { title: "Sales Opportunities", content: "Can the domain name be used on an \n International scale?", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-E_Y2SxKcWpnSeSoiUORKdK77ALEaQ79Pg&usqp=CAU" },
    { title: "Typo susceptibility", content: "How high is the risk of mistyping \n the domain name?", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRFXdYX3nRc2XwFDH2WyXT34iymqtpSQhF3LkKhmPMnr1JE_gtp8-H-qRPIBNBOKyjC8Y&usqp=CAU" },
    { title: "Buisness potential", content: "Can the domain be used as your company \n  address?", imageUrl: "https://cdn-icons-png.flaticon.com/512/2338/2338808.png" },
];
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  wrapper.id = "app";

  const groupedData = [];
  for (let i = 0; i <= data.length; i += 3) {
      groupedData.push(data.slice(i, i + 3));
  }

  const divs = groupedData.map((group) => {
      const column = document.createElement("div");
      column.className = "box";

      group.forEach((item) => {
          const cell = document.createElement("div");
          cell.style.width = "100%";

          const photo = document.createElement("img");
          photo.src = item.imageUrl;

          const textContent = document.createElement("div");
          textContent.className = "text-content";

          const title = document.createElement("h3");
          title.textContent = item.title;

          const content = document.createElement("p");
          content.textContent = item.content;

          textContent.appendChild(title);
          textContent.appendChild(content);

          cell.appendChild(photo);
          cell.appendChild(textContent);

          column.appendChild(cell);
      });

      return column;
  });

  divs.forEach((div) => {
      wrapper.appendChild(div);
  });

  document.body.appendChild(wrapper);
});
