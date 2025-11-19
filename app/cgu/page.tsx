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
        <p className="text-gray-400 mb-8">Dernière mise à jour : 19 novembre 2024</p>

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
              techniciens spécialisés dans le vitrage automobile, permettant le dépôt de missions,
              l'achat et la vente de leads, ainsi que la gestion des paiements.
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
              La poursuite de l'utilisation après notification vaut acceptation des nouvelles conditions.
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
              <li>Nom et prénom du représentant légal</li>
              <li>Dénomination sociale de l'entreprise</li>
              <li>Adresse du siège social</li>
              <li>Numéro SIRET valide</li>
              <li>Extrait Kbis de moins de 3 mois</li>
              <li>RIB professionnel</li>
              <li>Adresse email professionnelle</li>
              <li>Numéro de téléphone</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-3 mt-6">3.2 Validation du compte</h3>
            <p>
              Chaque inscription fait l'objet d'une vérification manuelle par l'équipe GlassUp sous
              24 à 48 heures ouvrées. Cette vérification inclut la validation des documents fournis
              et la conformité de l'activité. Nous nous réservons le droit de refuser toute inscription
              ne répondant pas à nos critères de qualité.
            </p>

            <h3 className="text-xl font-medium text-white mb-3 mt-6">3.3 Sécurité du compte</h3>
            <p>
              Vous êtes responsable de la confidentialité de vos identifiants de connexion et de toute
              activité effectuée depuis votre compte. En cas de suspicion d'utilisation frauduleuse,
              vous devez nous en informer immédiatement à security@glassup.fr.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Services proposés</h2>
            <p>GlassUp propose les services suivants :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dépôt de mission</strong> : publiez vos besoins en intervention vitrage</li>
              <li><strong>Mise en relation</strong> : trouvez un technicien certifié dans votre zone</li>
              <li><strong>Achat/vente de leads</strong> : monétisez ou acquérez des opportunités</li>
              <li><strong>Validation photo</strong> : preuve de réalisation avant paiement</li>
              <li><strong>Paiement sécurisé</strong> : transactions centralisées et protégées</li>
              <li><strong>Messagerie intégrée</strong> : communication via la plateforme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Obligations des utilisateurs</h2>
            <h3 className="text-xl font-medium text-white mb-3">5.1 Pour les garages</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fournir des informations exactes et complètes sur les missions proposées</li>
              <li>Respecter les délais de paiement (48h après validation photo)</li>
              <li>Valider ou contester les photos dans un délai de 24h</li>
              <li>Traiter les techniciens avec respect et professionnalisme</li>
              <li>Disposer des assurances professionnelles nécessaires</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-3 mt-6">5.2 Pour les techniciens</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Disposer des qualifications requises pour les interventions</li>
              <li>Maintenir une assurance responsabilité civile professionnelle à jour</li>
              <li>Respecter les engagements pris pour chaque mission (délais, qualité)</li>
              <li>Fournir les photos de validation après chaque intervention</li>
              <li>Utiliser du matériel et des pièces conformes aux normes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Tarification et paiement</h2>
            <p>
              L'inscription sur GlassUp est gratuite. GlassUp prélève une commission de 8% sur chaque
              transaction effectuée via la Plateforme. Ce taux est affiché de manière transparente
              avant chaque validation de mission.
            </p>
            <p>
              Les paiements sont sécurisés et centralisés via notre prestataire de paiement agréé.
              Les fonds sont transférés aux techniciens sous 48h ouvrées après validation photo
              par le garage donneur d'ordre.
            </p>
            <p>
              En cas de litige, les fonds peuvent être mis sous séquestre le temps de la résolution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Responsabilité</h2>
            <p>
              GlassUp agit en tant qu'intermédiaire technique et n'est pas partie aux contrats conclus
              entre les garages et les techniciens. GlassUp ne saurait être tenu responsable :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>De la qualité des prestations réalisées par les techniciens</li>
              <li>Des dommages résultant de l'exécution des missions</li>
              <li>Des informations erronées fournies par les utilisateurs</li>
              <li>De l'indisponibilité temporaire de la Plateforme</li>
            </ul>
            <p className="mt-4">
              Chaque professionnel reste responsable de ses propres prestations et doit disposer
              des assurances adéquates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Propriété intellectuelle</h2>
            <p>
              Tous les éléments de la Plateforme (logos, textes, images, logiciels, base de données, etc.)
              sont la propriété exclusive de GlassUp SAS et sont protégés par les lois françaises et
              internationales sur la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation ou exploitation non autorisée constitue une contrefaçon
              sanctionnée pénalement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Résiliation</h2>
            <p>
              GlassUp se réserve le droit de suspendre ou résilier tout compte en cas de :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violation des présentes CGU</li>
              <li>Fourniture d'informations fausses ou frauduleuses</li>
              <li>Comportement portant atteinte aux autres utilisateurs</li>
              <li>Non-respect répété des engagements de mission</li>
            </ul>
            <p className="mt-4">
              L'utilisateur peut à tout moment demander la suppression de son compte en contactant
              le support à support@glassup.fr. Les données seront conservées conformément à nos
              obligations légales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Droit applicable et litiges</h2>
            <p>
              Les présentes CGU sont soumises au droit français. En cas de litige relatif à
              l'interprétation ou l'exécution des présentes, les parties s'engagent à rechercher
              une solution amiable dans un délai de 30 jours.
            </p>
            <p>
              À défaut d'accord amiable, le litige sera soumis aux tribunaux compétents de Paris,
              nonobstant pluralité de défendeurs ou appel en garantie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Contact</h2>
            <p>
              Pour toute question concernant ces CGU :<br /><br />
              <strong>GlassUp SAS</strong><br />
              45 Avenue des Champs-Élysées<br />
              75008 Paris<br />
              Email : contact@glassup.fr<br />
              Téléphone : 01 84 56 78 90
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
