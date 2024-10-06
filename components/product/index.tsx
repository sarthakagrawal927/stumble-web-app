import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Product } from '@/types';

const ProductPage = ({ product }: { product: Product }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl font-bold">{product.name}</CardTitle>
              <CardDescription className="text-lg mt-2">
                A revolutionary solution for all your needs
              </CardDescription>
            </div>
            <Badge variant="secondary" className="text-lg">Rs {product.price}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="aspect-video w-full bg-gray-200 rounded-lg mb-6">
          </div>
          <div dangerouslySetInnerHTML={{ __html: product.rich_text }} />


          <h3 className="text-xl font-semibold mb-2">What youll get:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Instant access to the product</li>
            <li>Comprehensive documentation</li>
            <li>24/7 customer support</li>
            <li>Regular updates and improvements</li>
          </ul>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/api/placeholder/40/40" alt="Creator" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">Product Creator</p>
            </div>
          </div>
          <Button size="lg">Buy Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductPage;