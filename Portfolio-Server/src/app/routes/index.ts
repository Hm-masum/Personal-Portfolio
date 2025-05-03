import { Router } from 'express';
import { BlogRoutes } from '../modules/blog/blog.route';
import { ProjectRoutes } from '../modules/project/project.route';
import { UserRoutes } from '../modules/user/user.route';
import { CertificationRoutes } from '../modules/certification/certification.route';
import { EducationRoutes } from '../modules/education/education.route';
import { ExperienceRoutes } from '../modules/experience/experience.route';
import { SkillRoutes } from '../modules/skill/skill.route';
import { TestimonialRoutes } from '../modules/testimonial/testimonial.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/certifications',
    route: CertificationRoutes,
  },
  {
    path: '/educations',
    route: EducationRoutes,
  },
  {
    path: '/experiences',
    route: ExperienceRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },
  {
    path: '/skills',
    route: SkillRoutes,
  },
  {
    path: '/testimonial',
    route: TestimonialRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
