#!/bin/bash
# Investigato.rs deployment script

set -e

echo "🚀 Starting Investigato.rs deployment..."
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Build landing
echo -e "${BLUE}📦 Building landing page...${NC}"
cd landing
npm run build
cd ..
echo -e "${GREEN}✓ Landing built${NC}"
echo ""

# Build toolbox
echo -e "${BLUE}📦 Building toolbox...${NC}"
cd toolbox
npm run build
cd ..
echo -e "${GREEN}✓ Toolbox built${NC}"
echo ""

# Upload landing
echo -e "${BLUE}⬆️  Uploading landing page...${NC}"
rsync -avz --delete landing/dist/ investigato-server:~/public_html/
echo -e "${GREEN}✓ Landing uploaded${NC}"
echo ""

# Upload toolbox
echo -e "${BLUE}⬆️  Uploading toolbox...${NC}"
rsync -avz --delete toolbox/dist/ investigato-server:~/public_html/toolbox/
echo -e "${GREEN}✓ Toolbox uploaded${NC}"
echo ""

echo -e "${GREEN}🎉 Deployment complete!${NC}"
echo ""
echo "Landing:  https://investigato.rs"
echo "Toolbox:  https://toolbox.investigato.rs"
