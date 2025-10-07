import { useEffect, useState } from "react";
import Body from "./components/body";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import PermissionDenied from "./components/PermissionDenied";
import { initializeAuth, redirectToYoutube } from "./lib/auth";

import Incoming from "@/pages/incoming";
import Cases from "@/pages/cases";
import Suppliers from "@/pages/suppliers";
import Client from "@/pages/client";
import SbcEntities from "@/pages/sbc-entities";
import Reporting from "@/pages/reporting";
import System from "@/pages/system";
import PeppolInvoices from "@/pages/peppol-invoices";
import NotFound from "@/pages/NotFound";

function App() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    // Initialize authentication when app opens
    const isAuthorized = initializeAuth();
    setHasPermission(isAuthorized);
  }, []);

  // Show loading state while checking permissions
  if (hasPermission === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  // Show permission denied popup if user doesn't have proper role
  if (!hasPermission) {
    return <PermissionDenied onRedirect={redirectToYoutube} />;
  }

  return (
    <>
      <Header />
      <Body>
        <Routes>
          <Route path="/" element={<Incoming />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/client" element={<Client />} />
          <Route path="/sbc-entities" element={<SbcEntities />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/system" element={<System />} />
          <Route path="/peppol-invoices" element={<PeppolInvoices />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Body>
    </>
  );
}

export default App;
