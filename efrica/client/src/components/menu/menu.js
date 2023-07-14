import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Menu1() {
   const [selectedElement, setselectedElement] = React.useState(null);
   const [open, setOpen] = React.useState(false);
   function handleOpenMenu() {
      setOpen(true);
   }
   function handleCloseMenu(event) {
      setOpen(false);
      setselectedElement(event.target);
   }
   return (
      <div>
            <h2>
               {" "}
               Creating the menu component using the <i> Material UI </i> library.{" "}
            </h2>
         <div
            style={{
               height: "2rem",
               padding: "5px 10px",
               backgroundColor: "grey",
               width: "7rem",
               margin: "10px 10px 30px 10px",
               fontSize: "1.2rem",
               color: "white",
               borderRadius: "12px",
               cursor: "pointer",
            }}
            onClick={handleOpenMenu}
         >
            Open Menu
         </div>
         <Menu
            id="basic-menu"
            selectedElement={selectedElement}
            open={open}
            onClose={handleCloseMenu}
         >
             <MenuItem onClick={handleCloseMenu}> Who are we? </MenuItem>
            <MenuItem onClick={handleCloseMenu}> Our Services2 </MenuItem>
            <MenuItem onClick={handleCloseMenu}> Support </MenuItem>
         </Menu>
         </div>
   );

   }

   