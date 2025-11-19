import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Conditions Générales d\'Utilisation - GlassUp',
  description: 'CGU de la plateforme GlassUp',
}

export default function CGU() {
  return (
    <main className="min-h-screen bg-[#0F171E]">
      {/* Header */}
      <div className="border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="GlassUp"
              width={150}
              height={45}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Conditions Générales d'Utilisation</h1>
        <p className="text-gray-400 mb-8">Dernière mise à jour : Novembre 2024</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Objet</h2>
            <p>
              Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les
              conditions d'accès et d'utilisation de la plateforme GlassUp, accessible à l'adresse
              glassup.fr (ci-après « la Plateforme »).
            </p>
            <p>
              GlassUp est une plateforme de mise en relation entre les garages automobiles et les
              techniciens spécialisés dans le vitrage automobile.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Acceptation des CGU</h2>
            <p>
              L'utilisation de la Plateforme implique l'acceptation pleine et entière des présentes CGU.
              Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser la Plateforme.
            </p>
            <p>
              GlassUp se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs
              seront informés de toute modification par email ou par notification sur la Plateforme.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Inscription et compte utilisateur</h2>
            <h3 className="text-xl font-medium text-white mb-3">3.1 Conditions d'inscription</h3>
            <p>
              Pour utiliser les services de GlassUp, vous devez créer un compte en fournissant des
              informations exactes et complètes, notamment :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nom et prénom</li>
              <li>Dénomination sociale</li>
              <li>Numéro SIRET</li>
              <li>Extrait Kbis</li>
              <li>RIB</li>
              <li>Adresse email professionnelle</li>
              <li>Numéro de téléphone</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-3 mt-6">3.2 Validation du compte</h3>
            <p>
              Chaque inscription fait l'objet d'une vérification manuelle par l'équipe GlassUp.
              Nous nous réservons le droit de refuser toute inscription sans avoir à justifier notre décision.
            </p>

            <h3 className="text-xl font-medium text-white mb-3 mt-6">3.3 Sécurité du compte</h3>
            <p>
              Vous êtes responsable de la confidentialité de vos identifiants de connexion. Toute
              activité effectuée depuis votre compte est réputée effectuée par vous-même.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Services proposés</h2>
            <p>GlassUp propose les services suivants :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mise en relation entre garages et techniciens vitrage</li>
              <li>Gestion des missions et planning</li>
              <li>Système de paiement sécurisé</li>
              <li>Notation et évaluation des professionnels</li>
              <li>Support client</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Obligations des utilisateurs</h2>
            <h3 className="text-xl font-medium text-white mb-3">5.1 Pour les garages</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fournir des informations exactes sur les missions proposées</li>
              <li>Respecter les délais de paiement</li>
              <li>Traiter les techniciens avec respect et professionnalisme</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-3 mt-6">5.2 Pour les techniciens</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Disposer des qualifications et assurances nécessaires</li>
              <li>Respecter les engagements pris pour chaque mission</li>
              <li>Fournir un travail de qualité professionnelle</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Tarification et paiement</h2>
            <p>
              L'inscription sur GlassUp est gratuite. GlassUp prélève une commission sur chaque
              transaction effectuée via la Plateforme. Le montant de cette commission est communiqué
              de manière transparente avant chaque transaction.
            </p>
            <p>
              Les paiements sont sécurisés et centralisés via la Plateforme. Les fonds sont transférés
              aux techniciens dans un délai de 48h après validation de la mission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Responsabilité</h2>
            <p>
              GlassUp agit en tant qu'intermédiaire et n'est pas partie aux contrats conclus entre
              les garages et les techniciens. GlassUp ne saurait être tenu responsable des dommages
              directs ou indirects résultant de l'utilisation de la Plateforme ou de l'exécution
              des missions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Propriété intellectuelle</h2>
            <p>
              Tous les éléments de la Plateforme (logos, textes, images, logiciels, etc.) sont la
              propriété exclusive de GlassUp et sont protégés par les lois sur la propriété intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Résiliation</h2>
            <p>
              GlassUp se réserve le droit de suspendre ou résilier tout compte en cas de violation
              des présentes CGU, sans préavis et sans indemnité.
            </p>
            <p>
              L'utilisateur peut à tout moment demander la suppression de son compte en contactant
              le support à support@glassup.fr.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Droit applicable et litiges</h2>
            <p>
              Les présentes CGU sont soumises au droit français. En cas de litige, les parties
              s'engagent à rechercher une solution amiable. À défaut, les tribunaux de Paris seront
              seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Contact</h2>
            <p>
              Pour toute question concernant ces CGU :<br />
              Email : contact@glassup.fr
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link
            href="/"
            className="text-[#00A8E1] hover:underline inline-flex items-center gap-2"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  )
}
