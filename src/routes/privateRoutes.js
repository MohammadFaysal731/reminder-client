import AddItem from "../pages/AddItem";
import Home from "../pages/Home/Home";
import Items from "../pages/Items";
import ManageItems from "../pages/ManageItems";
import NotFound from "../pages/NotFound";

export const privateRoutes = [
  { path: "/", name: "Home", Comment: Home },
  { path: "/add-item", name: "AddItem", Comment: AddItem },
  { path: "/manage-items", name: "ManageItems", Comment: ManageItems },
  { path: "/items", name: "items", Comment: Items },
  { path: "*", name: "NotFound", Comment: NotFound },
];
