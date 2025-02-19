import React from 'react';
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// React StrictMode, 16.3 sürümünde eklenen ve bir uygulamadaki olası sorunları bulmamıza yardımcı olmayı amaçlayan bir özelliktir.
// içinde uyarılar görürseniz StrictMode, Concurrent React'i kullanmaya çalışırken büyük olasılıkla hatalarla karşılaşacaksınız.
// StrictModeherhangi bir UI oluşturmaz, yalnızca kontrolleri etkinleştirir ve çalışma zamanında uyarılar ekler.