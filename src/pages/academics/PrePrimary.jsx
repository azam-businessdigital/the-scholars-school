import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * Pre-Primary Section is completely absorbed into MRAK Kids Pre School.
 * Standard early childhood levels are now STD: Nursery, Mont – 2 & Sr.KG.
 */
export default function PrePrimary() {
  return <Navigate to="/academics/mrak-kids/" replace />;
}
