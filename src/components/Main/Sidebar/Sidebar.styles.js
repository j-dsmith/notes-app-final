import styled from "styled-components";

export const SidebarContainer = styled.div`
  grid-row: 1 / span 8;
  grid-column: 1 / span 1;
  position: relative;
`;

export const StyledSidebar = styled.div`
  position: absolute;
  height: 100%;
  width: 250px;
  background-color: #333;
  border-radius: 0px 15px 15px 0px;
  transition: all 0.5s ease;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const SidebarTray = styled.div`
  position: absolute;
  background-color: #5e5e5e;
  z-index: -1;
  border-radius: 15px;
  width: 250px;
  height: 100%;

  &.active {
    width: 500px;
  }
`;

export const SidebarItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  padding: 0px;
  cursor: pointer;
`;

export const SidebarLabel = styled.div`
  color: rgba(252, 250, 249, 0.85);
  font-size: 1.25rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 60%;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(252, 250, 249, 1);
  }
`;

export const SidebarIcon = styled.div`
  color: #fcfaf9;
  font-size: 1.5rem;
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
