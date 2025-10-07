import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MasterDataTab from "./components/master-data-tab";


// Set up the worker for react-pdf

const Incoming = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Incoming PEPPOL Invoices</h1>
      <Tabs defaultValue="master-data" className="w-full mt-4">
        <TabsList>
          <TabsTrigger value="master-data">Master data</TabsTrigger>
          <TabsTrigger value="po-matching">PO Matching</TabsTrigger>
          <TabsTrigger value="protested">Protested</TabsTrigger>
          <TabsTrigger value="processed">Processed</TabsTrigger>
          <TabsTrigger value="deleted">Deleted</TabsTrigger>
        </TabsList>
        <TabsContent
          value="master-data"
          className="border border-gray-200 p-4 bg-white rounded-md"
        >
          <MasterDataTab />
        </TabsContent>
        <TabsContent value="password"></TabsContent>
      </Tabs>
    </div>
  );
};

export default Incoming;
