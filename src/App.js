// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostPageHome from "./views/PostPageHome";
import LoginPage from "./views/LoginPage";
import SignUpPage from "./views/SignUpPage";
import PostPageAdd from "./views/PostPageAdd";
import PostPageDetails from "./views/PostPageDetails";
import PostPageUpdate from "./views/PostPageUpdate";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <PostPageHome /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignUpPage /> },
    { path: "/add", element: <PostPageAdd /> },
    { path: "/post/:id", element: <PostPageDetails /> },
    { path: "/update/:id", element: <PostPageUpdate /> },
  ]);

  return <RouterProvider router={router} />
}

export default App;

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<PostPageHome />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignUpPage />} />
//         {/* <Route path="/add" element={<PostPageAdd />} /> */}
//         {/* <Route path="/post/:id" element={<PostPageDetails />} /> */}
//         {/* <Route path="/update/:id" element={<PostPageUpdate />} /> */}
//         {/* <Route path="/spin" element={<SpinWheelPage />} /> */}
//         {/* <Route path="/drag" element={<DragCompPage />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }
