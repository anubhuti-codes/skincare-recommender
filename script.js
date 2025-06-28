const products = {
    cleansers: [
        { name: "Salicylic Acid 2% Face Wash", brand: "Minimalist", price: 229, skinTypes: ["oily", "combination"], concerns: ["acne"], platforms: ["Nykaa", "Amazon"], image: "sa.jpg" },
        { name: "Hydrating Cleanser", brand: "CeraVe", price: 1035, skinTypes: ["dry", "sensitive"], concerns: ["all"], platforms: ["Nykaa", "Amazon"], image: "hc.jpg" },
        { name: "Gentle Skin Cleanser", brand: "Cetaphil", price: 345, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa", "Amazon"], image: "gsc.jpg" },
        { name: "Gentle Skin Cleanser", brand: "Cetaphil", price: 699, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa", "Amazon"], image: "gsc.jpg" },
        { name: "Gentle Skin Cleanser", brand: "Cetaphil", price: 1299, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa", "Amazon"], image: "gsc.jpg" },
        { name: "2% Niacinamide Gentle Skin Cleanser", brand: "Dermaco", price: 299, skinTypes: ["dry", "sensitive","normal"], concerns: ["all"], platforms: ["Nykaa"], image: "nac.jpg" },
        { name: "2% Salicylic Acid Cleanser", brand: "Dermaco", price: 300, skinTypes: ["oily", "combination"], concerns: ["acne"], platforms: ["Nykaa"], image: "sac.jpg" },
        { name: "Hydrating Face Wash", brand: "Dot & Key", price: 230, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa", "Amazon"], image: "dakface.jpg" },
        { name: "Green Tea Face Wash", brand: "Plum", price: 345, skinTypes: ["oily", "combination"], concerns: ["acne"], platforms: ["Nykaa", "Amazon"], image: "plumfw.jpg" },
        { name: "Oil-Free Acne Wash", brand: "Neutrogena", price: 1599, skinTypes: ["oily"], concerns: ["acne"], platforms: ["Nykaa", "Amazon"], image: "neutrofw.jpg" },
        { name: "Refreshing Facial Wash", brand: "Simple", price: 299, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa", "Amazon"], image: "simplefw.jpg" },
        { name: "Rice Water Bright Cleanser", brand: "The Face Shop", price: 599, skinTypes: ["dry", "sensitive"], concerns: ["all"], platforms: ["Nykaa"], image: "faceshopfw.jpg" },
        { name: "Brightening Face Wash", brand: "Foxtale", price: 345, skinTypes: ["all"], concerns: ["dark-spots"], platforms: ["Nykaa"], image: "foxtalefw.jpg" },
        { name: "Gentle Cleansing Gel", brand: "Plix", price: 499, skinTypes: ["sensitive"], concerns: ["all"], platforms: ["Nykaa"], image: "plixfw.jpg" },
        { name: "BHA Cleanser", brand: "CORSX", price: 899, skinTypes: ["all"], concerns: ["acne"], platforms: ["Nykaa"], image: "cosrxfw.jpg" },
        { name: "Gentle Cleanser", brand: "Hyphen", price: 299, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "hyphenfw.jpg" },
        { name: "Gentle Cleanser", brand: "Hyphen", price: 699, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "hyphenfw.jpg" },
        { name: "Moisturizing Cleanser", brand: "SebaMed", price: 599, skinTypes: ["oily"], concerns: ["all"], platforms: ["Nykaa"], image: "sebafw.jpg" }
    ],

    serums: [
        { name: "Hyaluronic Acid 2% + B5", brand: "The Ordinary", price: 1099, skinTypes: ["dry", "sensitive"], concerns: ["all"], platforms: ["Nykaa", "Myntra"], image: "ordinaryserum.jpg" },
        { name: "Vitamin C 23% + Ferulic Acid", brand: "Minimalist", price: 599, skinTypes: ["all"], concerns: ["dark-spots", "aging"], platforms: ["Nykaa", "Amazon"], image: "minimalistserum.jpg" },
        { name: "Alpha Arbutin 2%", brand: "The Ordinary", price: 2199, skinTypes: ["all"], concerns: ["dark-spots"], platforms: ["Nykaa", "Myntra"], image: "ordinaryserum2.jpg" },
        { name: "Kojic Acid Serum", brand: "Dermaco", price: 499, skinTypes: ["all"], concerns: ["dark-spots"], platforms: ["Nykaa"], image: "dermacokojic.jpg" },
        { name: "2% Salicylic Acid Serum", brand: "Dermaco", price: 489, skinTypes: ["all"], concerns: ["acne"], platforms: ["Nykaa"], image: "dermacosalicylic.jpg" },
        { name: "Niacinamide serum", brand: "Plum", price: 345, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa", "Amazon"], image: "plumnia.jpg" },
        { name: "Niacinamide serum", brand: "Plum", price: 649, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa", "Amazon"], image: "plumnia.jpg" },
        { name: "Retinol Serum", brand: "Plum", price: 599, skinTypes: ["all"], concerns: ["aging"], platforms: ["Nykaa"], image: "plumret.jpg" },
        { name: "Peptide Serum", brand: "Foxtale", price: 599, skinTypes: ["all"], concerns: ["aging"], platforms: ["Nykaa"], image: "foxpep.jpg" },
        { name: "Vitamin C Serum", brand: "Plum", price: 599, skinTypes: ["all"], concerns: ["dark-spots","aging"], platforms: ["Nykaa"], image: "plumc.jpg" },
        { name: "Asiatica Ampoule Facial Serum", brand: "Centella", price: 2299, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "centellaserum.jpg" },
        { name: "Niacinamide 10% + TXA 4%", brand: "Anua", price: 1599, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "anuaserum.jpg" },
        { name: "1.5% Hyaluronic Acid", brand: "L'Oreal Paris", price: 345, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "lorealserum.jpg" },
        { name: "1.5% Hyaluronic Acid", brand: "L'Oreal Paris", price: 699, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "lorealserum.jpg" }
    ],

    moisturizers: [
        { name: "Ceramide Moisturizer", brand: "Minimalist", price: 345, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa", "Amazon"], image: "minmos.jpg" },
        { name: "Moisturizing Cream", brand: "CeraVe", price: 345, skinTypes: ["all"], concerns: ["all"], platforms: ["Amazon"], image: "ceravemoist.jpg" },
        { name: "Moisturizing Cream", brand: "CeraVe", price: 749, skinTypes: ["all"], concerns: ["all"], platforms: ["Amazon"], image: "ceravemoist.jpg" },
        { name: "Moisturizing Cream", brand: "CeraVe", price: 1549, skinTypes: ["all"], concerns: ["all"], platforms: ["Amazon"], image: "ceravemoist.jpg" },
        { name: "Hydrating Moisturizer", brand: "Cetaphil", price: 499, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa", "Amazon"], image: "cetamoist.jpg" },
        { name: "Hydrating Moisturizer", brand: "Cetaphil", price: 1499, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa", "Amazon"], image: "cetamoist.jpg" },
        { name: "Barrier Repairing Moisturizer", brand: "Dot & Key", price: 345, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "dakbarriermoist.jpg" },
        { name: "Barrier Repairing Moisturizer", brand: "Dot & Key", price: 649, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "dakbarriermoist.jpg" },
        { name: "Lightweight Moisturizer", brand: "Plum", price: 399, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "plumge;.jpg" },
        { name: "Natural Moisturizing Factors", brand: "The Ordinary", price: 799, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "ordmoist.jpg" },
        { name: "Ceramide Moisturizer", brand: "Deconstruct", price: 345, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "deconsmoist.jpg" },
        { name: "Ceramide Moisturizer", brand: "Deconstruct", price: 749, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "deconsmoist.jpg" },
        { name: "Hydrating Gel", brand: "Foxtale", price: 345, skinTypes: ["oily"], concerns: ["all"], platforms: ["Nykaa"], image: "foxgel.jpg" },
        { name: "Ceramide Moisturizer", brand: "REEQUIL", price: 295, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "reequilmoist.jpg" },
        { name: "Ceramide Moisturizer", brand: "REEQUIL", price: 495, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "reequilmoist.jpg" },
        { name: "Hydrating Cream", brand: "The Face Shop", price: 999, skinTypes: ["dry"], concerns: ["all"], platforms: ["Nykaa"], image: "faceshopmoist.jpg" },
        { name: "Moisturizing Cream", brand: "Dermaco", price: 345, skinTypes: ["dry"], concerns: ["all"], platforms: ["Nykaa"], image: "dermacomoist.jpg" },
        { name: "Dramatically Different Moisturizer", brand: "CLINIQUE", price: 7350, skinTypes: ["dry"], concerns: ["all"], platforms: ["Nykaa"], image: "clinique.jpg" },
        { name: "Hydrating Moisturizer", brand: "Aqualogica", price: 499, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "aquamoist.jpg" }
    ],

    sunscreens: [
        { name: "SPF 50+ Sunscreen", brand: "Dot & Key", price: 600, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "dotandkeysunscreen.jpg" },
        { name: "SPF 50+ Sunscreen", brand: "Dot & Key", price: 345, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "dotandkeysunscreen.jpg" },
        { name: "SPF 50 Sunscreen Gel", brand: "Minimalist", price: 399, skinTypes: ["oily", "combination"], concerns: ["all"], platforms: ["Nykaa"], image: "minimalistsunscreen.jpg" },
        { name: "SPF 50+ Sunscreen", brand: "Dermaco", price: 345, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "dermacosunscreen.jpg" },
        { name: "SPF 50+ Sunscreen", brand: "Dermaco", price: 649, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "dermacosunscreen.jpg" },
        { name: "Glow Sunscreen", brand: "Foxtale", price: 345, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "foxtalesun.jpg" },
        { name: "Sunscreen SPF 50 PA++++", brand: "Beauty of Joseon", price:1350, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "joseonsun.jpg" },
        { name: "Hydrating Sunscreen", brand: "Aqualogica", price: 449, skinTypes: ["dry", "sensitive"], concerns: ["all"], platforms: ["Nykaa"], image: "aqua.jpg" },
        { name: "Hydrating Sunscreen", brand: "Aqualogica", price: 279, skinTypes: ["dry", "sensitive"], concerns: ["all"], platforms: ["Nykaa"], image: "aqua.jpg" },
        { name: "Sun Protection Cream", brand: "Cetaphil", price: 1099, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "cetaphilsunscreen.jpg" },
        { name: "Matte Finish Sunscreen", brand: "Neutrogena", price: 299, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "neutrosun.jpg" },
        { name: "Matte Finish Sunscreen", brand: "Neutrogena", price: 699, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "neutrosun.jpg" },
        { name: "Matte Finish Sunscreen", brand: "Neutrogena", price: 999, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "neutrosun.jpg" }
    ],

    lipBalms: [
        { name: "Lip Sleeping Mask", brand: "Laneige", price: 600, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "lsm.jpg" },
        { name: "Tinted Lip Balm", brand: "Dot & Key", price: 249, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "tlb.jpg" },
        { name: "Lip Plumping Mask", brand: "Dot & Key", price: 249, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "lpm.jpg" },
        { name: "Lip Love Balm", brand: "Plum", price: 225, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "llb.jpg" },
        { name: "Hydrating Lip Balm", brand: "Hyphen", price: 399, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "hlb.jpg" },
        { name: "Petroleum Jelly", brand: "Vaseline", price: 99, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "pj.jpg" },
        { name: "Lip Therapy", brand: "Vaseline", price: 299, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "lt.jpg" },
        { name: "Lip Butter", brand: "Wishcare", price: 230, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "lb.jpg" },
        { name: "Plumping Lip Balm", brand: "The Ordinary", price: 999, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "pblo.jpg" },
        { name: "Ayurvedic Lip Balm", brand: "Indie Wild", price: 799, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "alb.jpg" },
        { name: "Barrier Repair Lip Balm", brand: "Deconstruct", price: 399, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "brlb.jpg" },
        { name: "Lip Balm SPF 30", brand: "Fixderma", price: 250, skinTypes: ["all"], concerns: ["all"], platforms: ["Nykaa"], image: "lbs.jpg" }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('skincareForm');
    const recommendations = document.getElementById('recommendations');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Normalize inputs for matching
        const skinType = form.skinType.value.trim().toLowerCase();
        const concern = form.concern.value.trim().toLowerCase();
        const budget = form.budget.value.trim().toLowerCase();

        recommendations.classList.remove('hidden');
        document.querySelectorAll('.products-grid').forEach(el => el.innerHTML = '');

        displayFilteredProducts('cleanserProducts', products.cleansers, skinType, concern, budget);
        displayFilteredProducts('serumProducts', products.serums, skinType, concern, budget);
        displayFilteredProducts('moisturizerProducts', products.moisturizers, skinType, concern, budget);
        displayFilteredProducts('sunscreenProducts', products.sunscreens, skinType, concern, budget);
        displayFilteredProducts('lipcareProducts', products.lipBalms, skinType, concern, budget);
    });

    function displayFilteredProducts(containerId, productsList, skinType, concern, budget) {
        const container = document.getElementById(containerId);
        const isLipBalms = containerId === 'lipcareProducts';
        container.innerHTML = '';

        if (isLipBalms) {
            // Showing all lip balms regardless of filter
            productsList.forEach(product => {
                container.insertAdjacentHTML('beforeend', createProductHTML(product));
            });
            return;
        }

        function matchesBudget(price) {
            if (budget === 'low') return price < 350;
            if (budget === 'medium') return price >= 350 && price <= 800;
            if (budget === 'high') return price > 800;
            return true;
        }

        // Primary filter: skin type + concern + budget
        let filtered = productsList.filter(product => {
            const skinMatch = product.skinTypes.includes("all") || product.skinTypes.map(s => s.toLowerCase()).includes(skinType);
            const concernMatch = product.concerns.includes("all") || product.concerns.map(c => c.toLowerCase()).includes(concern);
            const priceMatch = matchesBudget(product.price);
            return skinMatch && concernMatch && priceMatch;
        });

        // Fallback 1: skin type + budget (keep budget filter)
        if (filtered.length === 0) {
            filtered = productsList.filter(product => {
                const skinMatch = product.skinTypes.includes("all") || product.skinTypes.map(s => s.toLowerCase()).includes(skinType);
                const priceMatch = matchesBudget(product.price);
                return skinMatch && priceMatch;
            });
        }

        // Fallback 2: skin type + budget (keep budget filter)
        if (filtered.length === 0) {
            filtered = productsList.filter(product => {
                const priceMatch = matchesBudget(product.price);
                return (product.skinTypes.includes("all") || product.skinTypes.map(s => s.toLowerCase()).includes(skinType)) && priceMatch;
            });
        }

        if (filtered.length === 0) {
            container.innerHTML = `<p class="no-products">No products found matching your criteria. Try changing filters.</p>`;
            return;
        }

        filtered.forEach(product => {
            container.insertAdjacentHTML('beforeend', createProductHTML(product));
        });
    }

    function createProductHTML(product) {
        return `
            <div class="product-card">
                <div class="product-img">
                    <img src="images/products/${product.image}" alt="${product.name}" />
                </div>
                <div class="product-info">
                    <h4 class="product-title">${product.name}</h4>
                    <p class="product-brand">${product.brand}</p>
                    <p class="product-price">₹${product.price}</p>
                    <div class="platform-badges">
                        ${product.platforms.map(platform => `<div class="platform-badge">${platform}</div>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }
});
