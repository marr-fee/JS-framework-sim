import { addClass } from "../utils.js";
import { makeText } from "./texts.js";

// List structure 

/**
 * const products = [
  {
    image: "images/cotton-socks.png",
    item: { name: "Cool Sneakers", description: "Stylish and comfy." },
    "item cost": { cost: "$99", shopIcon: "🛒" }
  },
  {
    image: "images/plain-t-shirt.png",
    item: { name: "Denim Jacket", description: "Classic blue denim." },
    "item cost": { cost: "$79" }
  },
  {
    image: "images/placeholder.jpg",
    item: { name: "Cap", description: "Adjustable cotton cap." },
    "item cost": { cost: "$89" }
  }
];

 * 
 */

export function makeStoreTemplate(classes = [], nestElements = [], id) {
    // Main container for the grid
    const container = document.createElement("div");
    if (id) container.id = id;
    addClass(classes, container, 'def-shop-template');

    // Ensure nestElements is an array
    if (!Array.isArray(nestElements)) {
        console.warn("makeStoreTemplate expects an array of product objects.");
        return container;
    }

    // Loop through each product and build its card
    nestElements.forEach(nestElement => {
        const items = document.createElement('div');
        items.classList.add('def-shop-items');

        // === IMAGE SECTION ===
        const imgSection = document.createElement("div");
        imgSection.classList.add('def-shop-img-div');
        if (nestElement.image) {
            const img = document.createElement('img');
            img.src = nestElement.image;
            img.alt = nestElement.item?.name || "Product Image";
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.objectFit = "cover";
            imgSection.appendChild(img);
        }

        // === ITEM DETAILS SECTION ===
        const itemDetail = document.createElement('div');
        itemDetail.classList.add('def-shop-detail-div');

        const name = nestElement.item?.name || "Unnamed Product";
        const desc = nestElement.item?.description || "";

        const itmName = makeText('h3', name);
        const itmDescr = makeText('p', desc);
        itmDescr.classList.add('def-description');
        itmName.classList.add('def-item-name');

        itemDetail.append(itmName);
        itemDetail.append(itmDescr);

        // === COST / SHOP SECTION ===
        const itemCostShopSection = document.createElement('div');
        itemCostShopSection.classList.add('def-shop-cost-div');

        const costInfo = nestElement["item cost"];
        if (costInfo) {
            if (costInfo.cost) {
                const cost = document.createElement('span');
                cost.textContent = costInfo.cost;
                cost.classList.add('def-cost');
                itemCostShopSection.appendChild(cost);
            }

            if (costInfo.shopIcon) {
                const icon = document.createElement('span');
                icon.innerHTML = costInfo.shopIcon; // can be SVG or emoji
                icon.classList.add('def-shop-icon');
                icon.style.marginLeft = "10px";
                itemCostShopSection.appendChild(icon);
            }
        }

        // === Assemble item card ===
        items.appendChild(imgSection);
        items.appendChild(itemDetail);
        items.appendChild(itemCostShopSection);

        // Add item card to grid container
        container.appendChild(items);
    });

    return container;
}

