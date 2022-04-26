import React from 'react';
import { Dropdown, SplitButton} from 'react-bootstrap';

const SideMenuBar = () => {
    return (
        <div>
             <div className="m-3">
              <div>
                {["end"].map((direction) => (
                  <SplitButton
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="secondary"
                    title={`Menu-Items`}
                  >
                    <Dropdown.Item eventKey="1">INBOX</Dropdown.Item>
                    <Dropdown.Item eventKey="2">SETTINGS</Dropdown.Item>
                    <Dropdown.Item eventKey="3">POLICIES</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">LOGIN</Dropdown.Item>
                  </SplitButton>
                ))}
              </div>
            </div>
             <div className="m-3">
              <div>
                {["end"].map((direction) => (
                  <SplitButton
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="secondary"
                    title={`Ramadan-Special`}
                  >
                    <Dropdown.Item eventKey="1">Banner Design</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Card Design</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Ramadan UI</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Authentic Products</Dropdown.Item>
                  </SplitButton>
                ))}
              </div>
            </div>
             <div className="m-3">
              <div>
                {["end"].map((direction) => (
                  <SplitButton
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="secondary"
                    title={`Mobile-App-Design`}
                  >
                    <Dropdown.Item eventKey="1">iPhone logo</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Samsung Logo</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Vivo Logo</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Oppo Logo</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Realme Logo</Dropdown.Item>
                    <Dropdown.Item eventKey="4">OnePus 1+ Logo</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Huawei Logo</Dropdown.Item>
                  </SplitButton>
                ))}
              </div>
            </div>
            <div className="m-3">
              <div>
                {["end"].map((direction) => (
                  <SplitButton
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="secondary"
                    title={`Women-Fashion-UI`}
                  >
                    <Dropdown.Item eventKey="1"></Dropdown.Item>
                    <Dropdown.Item eventKey="2">Banner Design</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Logo Design</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Take Ideas from Experts</Dropdown.Item>
                  </SplitButton>
                ))}
              </div>
            </div>
             <div className="m-3">
              <div>
                {["end"].map((direction) => (
                  <SplitButton
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="secondary"
                    title={`Mens-Fashion-UI`}
                  >
                    <Dropdown.Item eventKey="1">Banner Design</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Logo Design</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Take Ideas from Experts</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Layout Design</Dropdown.Item>
                  </SplitButton>
                ))}
              </div>
            </div>
             
             <div className="m-3">
              <div>
                {["end"].map((direction) => (
                  <SplitButton
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="secondary"
                    title={`Home & Living`}
                  >
                    <Dropdown.Item eventKey="1">Home Decorations</Dropdown.Item>
                    <Dropdown.Item eventKey="2">architecture design</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Interior Design</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Home Theaters</Dropdown.Item>
                  </SplitButton>
                ))}
              </div>
            </div>
             <div className="m-3">
              <div>
                {["end"].map((direction) => (
                  <SplitButton
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="secondary"
                    title={`Electronics UI`}
                  >
                    <Dropdown.Item eventKey="1">Laptops-UI-Temps</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Mouse-UI-Temps</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Speakers-UI-Temps</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Camera-UI-temps</Dropdown.Item>
                  </SplitButton>
                ))}
              </div>
            </div>
             <div className="m-3">
              <div>
                {["end"].map((direction) => (
                  <SplitButton
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="secondary"
                    title={`More Design`}
                  >
                    <Dropdown.Item eventKey="1">Toys-UI-Temps</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Books and Stationary</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Food and Groceries-UI-Temps</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Best-UI-Temps</Dropdown.Item>
                  </SplitButton>
                ))}
              </div>
            </div>
            
        </div>
    );
};

export default SideMenuBar;