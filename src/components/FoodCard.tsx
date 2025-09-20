import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

interface FoodCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  category: string;
}

const FoodCard = ({ id, name, price, image, description, category }: FoodCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <Card className="food-card group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="food-card-image group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg text-foreground line-clamp-1">{name}</h3>
            <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
          </div>
          
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          )}
          
          <Button
            variant="food"
            className="w-full mt-3"
            onClick={handleAddToCart}
          >
            <Plus className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodCard;