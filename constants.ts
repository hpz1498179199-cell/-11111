import * as THREE from 'three';

// Visual Palette
export const COLORS = {
  NEEDLE_1: new THREE.Color('#004225'), // Deep Emerald
  NEEDLE_2: new THREE.Color('#0b5e3a'), // Lighter Green
  GOLD: new THREE.Color('#FFD700'),     // Pure Gold
  ROSE_GOLD: new THREE.Color('#E0BFB8'), // Rose Gold accents
  GLOW: new THREE.Color('#FFF8E7'),     // Warm White
};

// Tree Configuration
export const TREE_CONFIG = {
  HEIGHT: 14,
  RADIUS_BASE: 5.5,
  PARTICLE_COUNT: 3500,
  ORNAMENT_COUNT: 300,
  SCATTER_RADIUS: 35, // How far particles spread out
};

// Animation Settings
export const ANIMATION_SPEED = 2.5; // Lerp speed
