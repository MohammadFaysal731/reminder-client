import AddItem from "../pages/AddItem";
import Home from "../pages/Home/Home";
import ItemDetail from "../pages/Items/ItemDetail";
import Items from "../pages/Items/Items";
import ManageItems from "../pages/ManageItems/ManageItems";
import NotFound from "../pages/NotFound";

export const privateRoutes = [
  { path: "/", name: "Home", Comment: Home },
  { path: "/add-item", name: "AddItem", Comment: AddItem },
  { path: "/manage-items", name: "ManageItems", Comment: ManageItems },
  { path: "/items", name: "items", Comment: Items },
  { path: "/item/:id", name: "item", Comment: ItemDetail },
  { path: "*", name: "NotFound", Comment: NotFound },
];
