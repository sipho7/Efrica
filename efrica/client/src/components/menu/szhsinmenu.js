import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useState } from "react";

export default function SzhsinMenu() {
   const [selected, changeSelected] = useState(null);
   function handleChange(event) {
      changeSelected(event.value);
   }
   const app_name = {
    fontSize: "80px",
    color: "darkblue",
    textAlign: "center",
    position: "absolute",
    top: 0,
    left: 0,    
    height: "fit-content",
    margin: "10px"
   }
   
   return (
      <div>
         <h2 className="app_name" style={app_name}>
            
            Efrica
         </h2>
         <Menu menuButton = {<MenuButton styles={{backgroundColor: "black", 
         color: "white", position: "fixed"}}> {selected}Menu </MenuButton>} transition>
            <MenuItem value = "Who are we?" onClick = {handleChange}>
               Who are we?
            </MenuItem>
            <SubMenu label = "Our Services">
                <SubMenu label = "Software Development">
                    <MenuItem value = "API Development" onClick = {handleChange}>
                        API Development
                    </MenuItem>
                    <MenuItem value = "Mobile App Development" onClick = {handleChange}>
                        Mobile App Development
                    </MenuItem>
                    <MenuItem value = "Desktop Development" onClick = {handleChange}>
                        Desktop Development
                    </MenuItem>
                    <MenuItem value = "Web Development" onClick = {handleChange}>
                        Web Development
                    </MenuItem>
                </SubMenu>
                <SubMenu label = "Digital Forensics">
                    <MenuItem value = "Evidence Acquisition" onClick = {handleChange}>
                        Evidence Acquisition
                    </MenuItem>
                    <MenuItem value = "Evidence Preservation" onClick = {handleChange}>
                        Evidence Preservation
                    </MenuItem>
                    <MenuItem value = "Evidence Analysis" onClick = {handleChange}>
                        Evidence Analysis
                    </MenuItem>
                </SubMenu>
                <SubMenu label = "CyberSecurity">
                    <MenuItem value = "Employee training & Awareness" onClick = {handleChange}>
                        Employee training & Awareness
                    </MenuItem>
                    <MenuItem value = "Disaster Recovery Plan" onClick = {handleChange}>
                    Disaster Recovery Plan
                    </MenuItem>
                    <MenuItem value = "Incidence Report" onClick = {handleChange}>
                        Incidence Report
                    </MenuItem>
                    <MenuItem value = "Business Continuity Plan" onClick = {handleChange}>
                        Business Continuity Plan
                    </MenuItem>
                    <MenuItem value = " Penetration Testing" onClick = {handleChange}>
                        Penetration Testing
                    </MenuItem>
                </SubMenu>
                <SubMenu label = "Systems Support">

                </SubMenu>
            </SubMenu>
            <SubMenu label = "Our team">
               <MenuItem value = "Executives" onClick = {handleChange}>
                  Executives
               </MenuItem>
               <MenuItem value = "Management" onClick = {handleChange}>
                  Management
               </MenuItem>
               <SubMenu label = "Departments">
                  <MenuItem value = "Security & Digital Forensic" onClick = {handleChange}>
                     Security & Digital Forensic
                  </MenuItem>
                  <MenuItem value = "Research & Innovations" onClick = {handleChange}>
                     Research & Innovations
                  </MenuItem>
                  <MenuItem value = "Marketing & Accounts" onClick = {handleChange}>
                     Marketing & Accounts
                  </MenuItem>
                  <MenuItem value = "Customer Experience & Support" onClick = {handleChange}>
                     Customer Experience & Support
                  </MenuItem>
               </SubMenu>
            </SubMenu>
            <MenuItem value = "News?" onClick = {handleChange}>
               News
            </MenuItem>
            <SubMenu label = "Support">
               <MenuItem value = "Vacancies" onClick = {handleChange}>
                  Vacancies
               </MenuItem>
               <MenuItem value = "Vacancies" onClick = {handleChange}>
                  Business
               </MenuItem>
               <MenuItem value = "Vacancies" onClick = {handleChange}>
                  Research and Enginnering
               </MenuItem>
            </SubMenu>
         </Menu>
         <div>
            
         </div>
      </div>
   );
}