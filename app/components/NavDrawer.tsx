import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const NavDrawer = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="text-gray-100 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 6h16M4 12h16m-16 6h16" />
        </svg>
      </DrawerTrigger>
      <DrawerOverlay className="fixed inset-0 bg-sky-950/40" />
      <DrawerPortal>
        <DrawerContent className="fixed bottom-0 right-0 mt-24 flex h-full w-[400px] flex-col rounded-t-[10px] bg-sky-950">
          <div className="flex flex-col gap-4 p-4">
            <a
              href="/"
              className="text-lg font-medium text-gray-100 hover:text-white"
            >
              {`Accueil`}
            </a>
            <a
              href="#"
              className="text-lg font-medium text-gray-100 hover:text-white"
            >
              {`Services`}
            </a>
            <a
              href="#projets"
              className="text-lg font-medium text-gray-100 hover:text-white"
            >
              {`Projets`}
            </a>
            <a
              href="#"
              className="text-lg font-medium text-gray-100 hover:text-white"
            >
              {`Contact`}
            </a>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};
