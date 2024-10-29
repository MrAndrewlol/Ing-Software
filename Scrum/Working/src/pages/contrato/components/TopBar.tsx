// src/components/TopBar.tsx

import React, { useState, useRef, useEffect } from "react";
import styles from "./TopBar.module.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing menu icons

interface Button {
  label: string;
  onClick: () => void;
}

interface TopBarProps {
  buttons: Button[];
}

const TopBar: React.FC<TopBarProps> = ({ buttons }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const firstNavButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a navigation item is clicked
  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  // Handle accessibility: Shift focus when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      // Shift focus to the first navigation button
      firstNavButtonRef.current?.focus();

      // Add event listener for Escape key to close the menu
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsMenuOpen(false);
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      // Return focus to the menu icon
      menuButtonRef.current?.focus();
    }
  }, [isMenuOpen]);

  return (
    <div className={styles.topBar}>
      <div className={styles.stylesWrapper}>
        {/* Title Container */}
        <div className={styles.landBarTittleContainer}>
          <h1>CONTRATOGT</h1>
        </div>

        {/* Navigation Actions */}
        <div
          className={`${styles.lanBarActionsContainer} ${
            isMenuOpen ? styles.active : ""
          }`}
        >
          <button
            onClick={handleNavItemClick}
            ref={firstNavButtonRef}
            aria-label="Quiero Contratar"
          >
            QUIERO CONTRATAR
          </button>
          <button onClick={handleNavItemClick} aria-label="Quiero Trabajar">
            QUIERO TRABAJAR
          </button>
        </div>

        {/* Join Container */}
        <div
          className={`${styles.landBarJoinContainer} ${
            isMenuOpen ? styles.active : ""
          }`}
        >
          <button
            className={styles.landLogInButton}
            onClick={handleNavItemClick}
            aria-label="Iniciar Sesión"
          >
            INICIAR SESION
          </button>
          <button
            className={styles.landSignInButton}
            onClick={handleNavItemClick}
            aria-label="Registrar"
          >
            REGISTRAR
          </button>
        </div>

        {/* Menu Icon for Mobile */}
        <div
          className={styles.menuIcon}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") toggleMenu();
          }}
          ref={menuButtonRef}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}
    </div>
  );
};

export default TopBar;