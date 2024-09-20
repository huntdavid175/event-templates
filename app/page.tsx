"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Heart, Search, Eye } from "lucide-react";

// Mock data for event templates
const templates = [
  {
    id: 1,
    title: "Elegant Garden Wedding",
    image:
      "https://templately.com/_next/image?url=https%3A%2F%2Fitems.templately.com%2Fitem-2bb80f8f80f538d95a42cc4f0cbffe79%2Fplanwedding-services-page-for-gutenberg-thumbnail-XFN2iUE.jpg&w=3840&q=75",
    category: "wedding",
    tags: ["elegant", "garden"],
    description: "A beautiful outdoor setting for your perfect day.",
    price: 99.99,
  },
  {
    id: 2,
    title: "Rustic Barn Wedding",
    image:
      "https://i.pinimg.com/736x/8d/d8/0a/8dd80a59fc1d9235cc5e622b823e183c.jpg",
    category: "wedding",
    tags: ["rustic", "barn"],
    description: "Charming and cozy, perfect for a country-style celebration.",
    price: 89.99,
  },
  {
    id: 3,
    title: "Beach Wedding",
    image:
      "https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/website-templates/Wedding%20Landing%20Page.png",
    category: "wedding",
    tags: ["beach", "tropical"],
    description:
      "Say 'I do' with your toes in the sand and the ocean as your backdrop.",
    price: 109.99,
  },
  {
    id: 4,
    title: "Traditional Church Wedding",
    image:
      "https://planning.weddingchicks.com/functions/img/remodel4/website/templates/BlushRose-website.jpg",
    category: "wedding",
    tags: ["church", "classic"],
    description: "Timeless elegance for your sacred union.",
    price: 79.99,
  },
  {
    id: 5,
    title: "Modern City Wedding",
    image:
      "https://colorlib.com/wp-content/uploads/sites/2/weddingdreams-free-template.jpg",
    category: "wedding",
    tags: ["city", "contemporary"],
    description: "Sleek and sophisticated for the urban couple.",
    price: 119.99,
  },
  {
    id: 6,
    title: "Intimate Backyard Wedding",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/weddings-design-template-198b818ea202ff06770e93522195f845_screen.jpg?ts=1634062785",
    category: "wedding",
    tags: ["backyard", "small"],
    description: "Personal and cozy, perfect for a close-knit celebration.",
    price: 69.99,
  },
  {
    id: 7,
    title: "Birthday Bash",
    image:
      "https://img.freepik.com/free-vector/gradient-colorful-birthday-youtube-thumbnail_23-2149164656.jpg",
    category: "birthday",
    tags: ["fun", "celebration"],
    description: "Colorful and exciting templates for any age celebration.",
    price: 49.99,
  },
  {
    id: 8,
    title: "Corporate Gala",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gala-dinner-template-design-7570d7cabac0d1d3f70a199c3ba28dbe_screen.jpg?ts=1691111128",
    category: "corporate",
    tags: ["formal", "business"],
    description: "Sophisticated designs for professional events.",
    price: 149.99,
  },
  {
    id: 9,
    title: "Baby Shower",
    image:
      "https://img.freepik.com/free-vector/babyshower-youtube-thumbnail-template_23-2149223806.jpg",
    category: "baby-shower",
    tags: ["cute", "family"],
    description: "Sweet and adorable themes to welcome the little one.",
    price: 59.99,
  },
  // Additional templates for pagination demonstration
  {
    id: 10,
    title: "Vintage Wedding",
    image:
      "https://www.sliderrevolution.com/wp-content/uploads/2023/06/Feelings.jpg",
    category: "wedding",
    tags: ["vintage", "retro"],
    description: "A blast from the past for your special day.",
    price: 94.99,
  },
  {
    id: 11,
    title: "Mountain Wedding",
    image:
      "https://www.elegantthemes.com/blog/wp-content/uploads/2023/06/iris-template-monster-wordpress-wedding-theme-1.jpg",
    category: "wedding",
    tags: ["mountain", "scenic"],
    description: "Breathtaking views for an unforgettable ceremony.",
    price: 129.99,
  },
  {
    id: 12,
    title: "Graduation Party",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/school-graduation-party-design-template-82c0196a92de20a2c7ef9704944a9711_screen.jpg?ts=1673111500",
    category: "graduation",
    tags: ["academic", "celebration"],
    description: "Celebrate academic achievements in style.",
    price: 54.99,
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [sortOrder, setSortOrder] = useState("alphabetical");
  const [visibleTemplates, setVisibleTemplates] = useState(6);

  const filteredAndSortedTemplates = templates
    .filter(
      (template) =>
        (selectedCategory === "all" ||
          template.category === selectedCategory) &&
        (searchTerm === "" ||
          template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          template.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          ))
    )
    .sort((a, b) => {
      if (sortOrder === "alphabetical") {
        return a.title.localeCompare(b.title);
      } else if (sortOrder === "favorites") {
        return (
          (favorites.includes(b.id) ? 1 : 0) -
          (favorites.includes(a.id) ? 1 : 0)
        );
      }
      return 0;
    });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const loadMoreTemplates = () => {
    setVisibleTemplates((prevVisible) =>
      Math.min(prevVisible + 6, filteredAndSortedTemplates.length)
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">
        Choose Your Event Template
      </h1>
      <p className="text-blue-600 mb-6">
        Find the perfect template for your special day, whether it's a wedding
        or another celebration.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input
          type="text"
          placeholder="Search templates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-1/3 border-blue-200 focus:ring-blue-300 focus:border-blue-300"
        />
        <Select onValueChange={setSelectedCategory} defaultValue="all">
          <SelectTrigger className="md:w-1/4 border-blue-200 focus:ring-blue-300 focus:border-blue-300">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="wedding">Wedding</SelectItem>
            <SelectItem value="birthday">Birthday</SelectItem>
            <SelectItem value="corporate">Corporate</SelectItem>
            <SelectItem value="baby-shower">Baby Shower</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setSortOrder} defaultValue="alphabetical">
          <SelectTrigger className="md:w-1/4 border-blue-200 focus:ring-blue-300 focus:border-blue-300">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="alphabetical">Alphabetical</SelectItem>
            <SelectItem value="favorites">Favorites</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedTemplates.map((template) => (
          <Card
            key={template.id}
            className="overflow-hidden border border-blue-100 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="p-0 relative">
              <img
                src={template.image}
                alt={template.title}
                className="w-full h-64 object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-white bg-blue-400 hover:bg-blue-500 rounded-full"
                onClick={() => toggleFavorite(template.id)}
              >
                <Heart
                  className={`h-4 w-4 ${
                    favorites.includes(template.id) ? "fill-current" : ""
                  }`}
                />
              </Button>
              <div className="absolute bottom-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-md font-semibold">
                ${template.price.toFixed(2)}
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-blue-800 mb-2">
                {template.title}
              </CardTitle>
              <p className="text-blue-600 text-sm mb-3">
                {template.description}
              </p>
              <div className="mt-2">
                {template.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-blue-50 text-blue-600 rounded-full px-2 py-1 text-xs mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="text-blue-600 border-blue-300 hover:bg-blue-50"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Quick View
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{template.title}</DialogTitle>
                    <DialogDescription>
                      {template.description}
                    </DialogDescription>
                  </DialogHeader>
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-64 object-cover rounded-md"
                  />
                  <p className="text-lg font-semibold text-blue-600">
                    Price: ${template.price.toFixed(2)}
                  </p>
                </DialogContent>
              </Dialog>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Select
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {visibleTemplates < filteredAndSortedTemplates.length && (
        <div className="mt-8 text-center">
          <Button
            onClick={loadMoreTemplates}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Show More
          </Button>
        </div>
      )}
    </div>
  );
}
