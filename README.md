# 🚀 StyleRush-AI

### AI Face-to-Fashion Stylist | Virtual Try-On | System Design | DevOps | AWS Cloud

StyleRush-AI is an AI-powered fashion shopping web application designed to help users discover matching outfits, explore clothing products, and enjoy a personalized shopping experience.

The project aims to combine **AI-assisted fashion recommendations and virtual try-on** with a scalable backend architecture using Python, FastAPI, Redis, Apache Kafka, Docker, CI/CD, and AWS.

It is being developed as a practical engineering project to demonstrate full-stack development, AI integration, system design, automation, and cloud deployment skills.

---

## 🌟 Project Highlights

- 🤖 **AI Face-to-Fashion Stylist:** Planned photo-assisted styling using supported image-processing models and user preferences.
- 👕 **AI Outfit Recommendations:** Suggest coordinated clothing combinations, such as matching trousers and shoes for a selected shirt.
- 🪞 **AI Virtual Try-On:** Planned clothing previews using a user image, garment image, and compatible AI model or service.
- 🛍️ **Online Fashion Shopping:** Product browsing, shopping cart, and order-related workflows.
- 🔐 **Authentication:** JWT-based authentication and password hashing.
- ⚡ **Redis Caching:** Planned caching for frequently accessed information.
- 📩 **Apache Kafka:** Planned event-driven processing for order and inventory workflows.
- 🐳 **Docker:** Planned containerization for consistent application environments.
- 🔄 **CI/CD Pipeline:** Planned automated testing, builds, and deployment using GitHub Actions.
- ☁️ **AWS Cloud:** Planned cloud deployment, managed services, and monitoring.

---

## 🤖 AI Face-to-Fashion Stylist and Virtual Try-On

The main AI feature aims to help users explore outfit combinations using a selfie or supported image input.

### How It Is Designed to Work

1. The user uploads a suitable selfie or captures an image through a supported interface.
2. The user selects clothing, a preferred style, or an occasion.
3. The backend validates the image and sends the required inputs to the configured AI components.
4. The recommendation engine suggests coordinated clothing based on color, category, and preferences.
5. A compatible virtual try-on model or service generates a clothing preview.
6. The user explores recommended products and can continue to the shopping cart.

### Example

**Input:** A black shirt and a selected casual style.

**Potential outfit recommendation:**

- Beige or grey trousers.
- White sneakers.
- A complementary watch or accessory.

**Expected experience:** Matching outfit suggestions, product links, and, when a compatible virtual try-on model is configured, a preview of the selected outfit on the user's image.

*Note: Face-based styling, outfit recommendations, and virtual try-on are separate capabilities. Actual image generation depends on the selected model or service and its successful integration.*

---

## ✨ Application Features

- User registration and login.
- JWT-based authentication.
- Fashion product browsing and product details.
- Shopping cart and checkout workflows.
- Order management and tracking modules.
- Wishlist and shopping history.
- Seller and inventory-related modules.
- AI outfit recommendation and color-matching modules.
- Size recommendation and virtual try-on modules.
- Payment-related backend integration modules.
- Administrative product and order management.

Feature availability depends on implementation, configuration, and end-to-end testing.

---

## 🛠️ Detailed Technical Stack

| Category | Technology | Purpose |
|---|---|---|
| Frontend | React | Build interactive user interfaces |
| Frontend tooling | Vite | Development server and build tooling |
| Languages | JavaScript, Python | Frontend and backend logic |
| Markup and styling | HTML, CSS | Web page structure and styling |
| Backend framework | FastAPI | Build backend APIs and services |
| API architecture | REST, JSON | Frontend-backend communication |
| Data validation | Pydantic | Validate API request and response data |
| ORM | SQLAlchemy | Database interaction using Python models |
| Current database | SQLite | Local development and initial data storage |
| Planned database | PostgreSQL | Production-oriented relational storage |
| Authentication | JWT | Authentication tokens |
| Password security | Password hashing | Protect stored passwords |
| AI implementation | Python-based modules | Coordinate recommendation logic |
| Computer vision | Compatible image-processing models — planned | Process supported image inputs |
| Virtual try-on | Compatible model or API — planned | Generate clothing previews |
| Caching | Redis — planned | Improve performance for suitable data |
| Event streaming | Apache Kafka — planned | Process asynchronous application events |
| Version control | Git | Track source code changes |
| Source hosting | GitHub | Host the project repository |
| CI/CD | GitHub Actions — planned | Automate testing, builds, and releases |
| Containerization | Docker — planned | Package application components |
| Container registry | Amazon ECR — planned | Store container images |
| Cloud infrastructure | AWS — planned | Host and operate the application |
| Managed database | Amazon RDS for PostgreSQL — planned | Managed relational database |
| Cache service | Amazon ElastiCache for Redis — planned | Managed Redis infrastructure |
| Monitoring | Amazon CloudWatch — planned | Collect logs, metrics, and alarms |
| Secrets management | AWS Secrets Manager — planned | Store sensitive configuration |
| Infrastructure as Code | Terraform — future enhancement | Provision repeatable infrastructure |

---

## 🏛️ System Design and Target Architecture

The following diagram represents the target architecture. Not every component is currently implemented or deployed.

```text
                         USERS
                           |
                           v
                  React Web Application
                           |
                           v
                  FastAPI REST Backend
                           |
              +------------+------------+
              |            |            |
              v            v            v
          AI Services   Redis Cache  PostgreSQL
              |                         |
              v                         |
       Outfit Recommendations           |
       Virtual Try-On Model             |
              |                         |
              +------------+------------+
                           |
                           v
                      Order Service
                           |
                           v
                     Apache Kafka
                           |
              +------------+------------+
              |            |            |
              v            v            v
          Inventory     Payment    Notification
           Worker       Workflow      Worker

                 Docker + GitHub Actions
                           |
                           v
                          AWS
                           |
                           v
               Monitoring and Security
```

### System Design Principles

- **Separation of concerns:** Keep API routes, business logic, database operations, and AI services organized into separate modules.
- **Caching:** Use Redis for suitable read-heavy operations with expiration and invalidation rules.
- **Event-driven processing:** Use Kafka for asynchronous tasks that should not block the main request unnecessarily.
- **Scalability:** Design services to support multiple application instances when required.
- **Reliability:** Introduce retries, timeouts, health checks, idempotent event processing, and failure handling.
- **Security:** Apply authentication, authorization, secret management, and input validation.
- **Observability:** Use logs, metrics, monitoring, and alerts to identify failures and performance issues.

---

## ⚡ Redis — Caching Strategy

Redis is planned to improve application performance by caching frequently requested data.

Potential use cases:

- Product catalog caching.
- Frequently accessed category information.
- Short-lived recommendation results where appropriate.
- Rate limiting, if a suitable strategy is implemented.

The implementation should define cache keys, expiration, invalidation, and behavior when Redis is unavailable. Private user data should not be cached without appropriate access controls.

---

## 📩 Apache Kafka — Event-Driven Architecture

Kafka is planned to connect asynchronous application workflows through events.

### Example: Order Processing

1. A user submits an order.
2. The backend validates the request and persists the order.
3. An `OrderCreated` event is published to Kafka.
4. A background consumer processes inventory-related work.
5. Other consumers handle notification or payment workflow events.
6. The application tracks processing status and handles retries or failures.

For reliable processing, the implementation should consider event schemas, duplicate delivery, idempotency, retry policies, dead-letter handling, and database/event consistency.

Kafka is not required for every API request. It is intended for workflows that benefit from asynchronous processing.

---

## 🔄 DevOps and CI/CD Pipeline

The goal is to automate the path from a code change to a tested deployment.

```text
Code Change
    |
    v
Git Push / Pull Request
    |
    v
GitHub Actions
    |
    v
Install Dependencies
    |
    v
Run Tests and Quality Checks
    |
    v
Build Docker Images
    |
    v
Publish Images to Amazon ECR
    |
    v
Deploy to AWS
    |
    v
Health Checks and Monitoring
```

### Planned DevOps Practices

- Git-based version control and pull-request workflows.
- Automated backend tests and frontend build checks.
- Docker image creation and versioning.
- GitHub Actions workflow automation.
- Secure deployment credentials and least-privilege IAM roles.
- Deployment health checks and rollback planning.
- Logs, metrics, and alarms using CloudWatch.
- Terraform for repeatable infrastructure provisioning.

---

## ☁️ AWS Deployment Roadmap

| AWS Service | Planned Purpose |
|---|---|
| Amazon VPC | Isolated cloud networking |
| Application Load Balancer | Distribute incoming application traffic |
| Amazon ECS or EKS | Run containerized workloads |
| Amazon ECR | Store container images |
| Amazon RDS for PostgreSQL | Managed relational database |
| Amazon ElastiCache for Redis | Managed cache |
| Amazon MSK or another Kafka deployment | Managed event streaming |
| Amazon S3 | Store suitable product images and generated media |
| Amazon CloudFront | Deliver frontend assets |
| Amazon CloudWatch | Logs, metrics, and alarms |
| AWS IAM | Identity and access management |
| AWS Secrets Manager | Store sensitive configuration |

The final service selection will depend on requirements, complexity, and cost. Managed Kafka and Kubernetes can be expensive or operationally complex, so a simpler deployment is appropriate during early development.

---

## 💻 Run Locally

### Prerequisites

- Python
- Node.js and npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/maddikumar30/StyleRush-AI.git
cd StyleRush-AI
```

### 2. Configure the Backend

From the project root:

```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

Create a `backend/.env` file containing a securely generated JWT secret:

```env
SECRET_KEY=replace_with_your_own_secure_random_secret
```

Generate your own secret locally. Do not commit this file or share its contents.

Start FastAPI from the `backend` directory:

```powershell
python -m uvicorn app.main:app --reload
```

- Backend: `http://127.0.0.1:8000`
- API documentation: `http://127.0.0.1:8000/docs`

### 3. Configure the Frontend

Open another terminal from the project root:

```powershell
cd frontend
npm install
npm run dev
```

Open the URL shown by Vite, typically `http://localhost:5173`.

Ensure the frontend API URL and backend CORS settings match your environment.

---

## 🔐 Security and Privacy

- Keep API keys, payment credentials, JWT secrets, and database passwords out of Git.
- Use HTTPS for deployed services.
- Apply appropriate authentication and authorization to protected endpoints.
- Validate uploaded image formats and file sizes.
- Restrict access to selfies and generated images.
- Define image retention and deletion behavior.
- Verify payment results on the backend.
- Use least-privilege cloud permissions and secure secret management.

---

## 🧪 Testing

Backend tests are located in `backend/tests/`.

From the backend directory, run:

```powershell
python -m pytest
```

Test results depend on installed dependencies, database configuration, and test setup. New Kafka, Redis, AI, and deployment integrations should receive their own unit, integration, and end-to-end tests.

---

## 🗺️ Development Roadmap

- [x] Create the React frontend and FastAPI backend structure.
- [x] Add initial API modules, AI-related modules, and frontend pages.
- [x] Initialize Git and publish the project to GitHub.
- [x] Exclude local environment secrets and development dependencies from Git.
- [ ] Validate core authentication, product, cart, and order workflows.
- [ ] Improve API validation, automated tests, and error handling.
- [ ] Configure PostgreSQL and database migrations.
- [ ] Integrate and benchmark Redis caching.
- [ ] Implement and test Kafka-based event processing.
- [ ] Integrate and validate AI photo-based styling and virtual try-on.
- [ ] Containerize the application using Docker.
- [ ] Build the GitHub Actions CI/CD pipeline.
- [ ] Deploy the application to AWS.
- [ ] Add monitoring, health checks, and operational documentation.
- [ ] Explore Terraform and AI-assisted operational monitoring.

---

## 🎓 Engineering Skills Demonstrated

This project aims to demonstrate practical skills in:

- Full-stack application development.
- REST API design and backend engineering.
- AI service integration and image-processing workflows.
- Database modeling and performance optimization.
- Redis caching and Apache Kafka event-driven architecture.
- System design, reliability, and scalability.
- Docker, GitHub Actions, and CI/CD.
- AWS cloud infrastructure and deployment.
- Security, monitoring, and operational troubleshooting.

---

## 👨‍💻 Author

**Maddi Kumar**

GitHub: [@maddikumar30](https://github.com/maddikumar30)

Repository: [StyleRush-AI](https://github.com/maddikumar30/StyleRush-AI)

---

**Project Status:** Under active development. AI, distributed-system, CI/CD, and cloud features described as planned will be updated as they are implemented, tested, and deployed.
