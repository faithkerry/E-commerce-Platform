import { Home, Grid, Package, Heart, User } from "lucide-react";

function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white flex justify-around py-3 border-t border-gray-700">

      <Home />
      <Grid />
      <Package />
      <Heart />
      <User />

    </div>
  );
}

export default BottomNav;